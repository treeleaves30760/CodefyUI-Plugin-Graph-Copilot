import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  cancelRunById, fetchRun, fetchRunArtifacts, fetchRunList,
  isTerminalRunStatus, parseRunRow, probeRunHistory, resetRunHistoryProbeForTests,
} from './runHistory';

/** api.http.fetch stub routing url -> response. */
function httpApi(routes: Record<string, () => Response>) {
  return {
    http: {
      fetch: vi.fn(async (url: string) => {
        for (const [prefix, make] of Object.entries(routes)) {
          if (url.startsWith(prefix)) return make();
        }
        return new Response('{"detail":"not found"}', { status: 404 });
      }),
    },
  };
}
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const ROW = {
  id: 'run-1', name: 'training', status: 'succeeded', error: null,
  queue_position: null, active: false,
  final_metrics: { val_loss: 2.95, bogus: 'x' },
  created_at: '2026-08-12T00:00:00Z',
  started_at: '2026-08-12T00:00:10Z', finished_at: '2026-08-12T01:01:10Z',
};

beforeEach(() => resetRunHistoryProbeForTests());

describe('isTerminalRunStatus', () => {
  it('treats queued/running as active and the rest as terminal', () => {
    expect(isTerminalRunStatus('queued')).toBe(false);
    expect(isTerminalRunStatus('running')).toBe(false);
    for (const s of ['succeeded', 'failed', 'cancelled', 'interrupted']) {
      expect(isTerminalRunStatus(s)).toBe(true);
    }
  });
});

describe('parseRunRow', () => {
  it('maps snake_case fields, filters non-numeric metrics, computes duration', () => {
    const row = parseRunRow(ROW)!;
    expect(row.runId).toBe('run-1');
    expect(row.finalMetrics).toEqual({ val_loss: 2.95 });
    expect(row.durationS).toBe(3660);
    expect(row.lastCursor).toBeNull();
  });
  it('rejects rows without id or status', () => {
    expect(parseRunRow({ status: 'running' })).toBeNull();
    expect(parseRunRow({ id: 'x' })).toBeNull();
    expect(parseRunRow(null)).toBeNull();
  });
});

describe('probeRunHistory', () => {
  it('caches a positive probe (one request for two calls)', async () => {
    const api = httpApi({ '/api/runs': () => json({ runs: [], total: 0 }) });
    expect(await probeRunHistory(api)).toBe(true);
    expect(await probeRunHistory(api)).toBe(true);
    expect(api.http.fetch).toHaveBeenCalledTimes(1);
  });
  it('does not cache a failed probe (retries next call)', async () => {
    const api = httpApi({});
    expect(await probeRunHistory(api)).toBe(false);
    expect(await probeRunHistory(api)).toBe(false);
    expect(api.http.fetch).toHaveBeenCalledTimes(2);
  });
});

describe('fetchers', () => {
  it('fetchRunList parses rows and total', async () => {
    const api = httpApi({ '/api/runs?': () => json({ runs: [ROW, { junk: true }], total: 7 }) });
    const { runs, total } = await fetchRunList(api, { limit: 5 });
    expect(runs).toHaveLength(1);
    expect(total).toBe(7);
  });
  it('fetchRun returns null on 404 and a row with lastCursor on 200', async () => {
    expect(await fetchRun(httpApi({}), 'nope')).toBeNull();
    const api = httpApi({ '/api/runs/run-1': () => json({ ...ROW, last_cursor: 42 }) });
    expect((await fetchRun(api, 'run-1'))!.lastCursor).toBe(42);
  });
  it('fetchRunArtifacts tolerates failure and filters malformed entries', async () => {
    expect(await fetchRunArtifacts(httpApi({}), 'r')).toEqual([]);
    const api = httpApi({
      '/api/runs/r/artifacts': () => json({ artifacts: [
        { kind: 'checkpoint', path: 'models/a.pt', created_at: 't1' }, { path: 'no-kind' },
      ] }),
    });
    expect(await fetchRunArtifacts(api, 'r')).toEqual([
      { kind: 'checkpoint', path: 'models/a.pt', createdAt: 't1' },
    ]);
  });
  it('cancelRunById returns response.ok and never throws', async () => {
    expect(await cancelRunById(httpApi({ '/api/runs/r/cancel': () => json({ cancelled: true }) }), 'r')).toBe(true);
    expect(await cancelRunById(httpApi({}), 'r')).toBe(false);
  });
});
