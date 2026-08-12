/**
 * runHistory — read-only REST adapter over the host's server-owned run
 * surface (/api/runs, current CodefyUI main; absent on 1.3.0, where runs
 * die with their socket). Feature-detect with probeRunHistory before use.
 * Deliberately REST-only: contract v3 api.runs/api.events add a second
 * path for the same reads and no replay cursor (decision on issue #22).
 */

import type { CodefyUIPluginAPI } from '../types/codefyui';

type HttpApi = Pick<CodefyUIPluginAPI, 'http'>;

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ACTIVE_RUN_STATUSES: ReadonlySet<string> = new Set(['queued', 'running']);

export interface RunRow {
  runId: string;
  name: string | null;
  status: string;
  active: boolean;
  queuePosition: number | null;
  createdAt: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  error: string | null;
  finalMetrics: Record<string, number>;
  lastCursor: number | null;
  durationS: number | null;
}

export interface RunArtifact {
  kind: string;
  path: string;
  createdAt: string | null;
}

export function isTerminalRunStatus(status: string): boolean {
  return status !== '' && !ACTIVE_RUN_STATUSES.has(status);
}

// ---------------------------------------------------------------------------
// Probe caching
// ---------------------------------------------------------------------------

let probedAvailable = false;

export function resetRunHistoryProbeForTests(): void {
  probedAvailable = false;
}

/** True when the host exposes /api/runs. Success is cached for the session;
 * failure is NOT cached (a mid-session backend restart must be recoverable). */
export async function probeRunHistory(api: HttpApi, signal?: AbortSignal): Promise<boolean> {
  if (probedAvailable) return true;
  try {
    const response = await api.http.fetch('/api/runs?limit=1', { signal });
    if (response.ok) {
      probedAvailable = true;
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Cast value to a record if it looks like an object. */
function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

/** Extract optional string value, null if absent or not a string. */
function optionalString(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

/** Finite number value or null. */
function finiteNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

// ---------------------------------------------------------------------------
// Parse run row from raw payload
// ---------------------------------------------------------------------------

export function parseRunRow(raw: unknown): RunRow | null {
  const row = asRecord(raw);
  if (!row) return null;

  const id = optionalString(row.id);
  const status = optionalString(row.status);
  if (!id || !status) return null;

  const startedAtStr = optionalString(row.started_at);
  const finishedAtStr = optionalString(row.finished_at);

  let durationS: number | null = null;
  if (startedAtStr && finishedAtStr) {
    const startMs = Date.parse(startedAtStr);
    const finishMs = Date.parse(finishedAtStr);
    if (Number.isFinite(startMs) && Number.isFinite(finishMs)) {
      const diff = Math.round((finishMs - startMs) / 1000);
      if (diff >= 0) durationS = diff;
    }
  }

  const finalMetricsRaw = asRecord(row.final_metrics);
  const finalMetrics: Record<string, number> = {};
  if (finalMetricsRaw) {
    for (const [key, value] of Object.entries(finalMetricsRaw)) {
      const num = finiteNumber(value);
      if (num !== null) finalMetrics[key] = num;
    }
  }

  return {
    runId: id,
    name: optionalString(row.name),
    status,
    active: row.active === true,
    queuePosition: finiteNumber(row.queue_position),
    createdAt: optionalString(row.created_at),
    startedAt: startedAtStr,
    finishedAt: finishedAtStr,
    error: optionalString(row.error),
    finalMetrics,
    lastCursor: finiteNumber(row.last_cursor),
    durationS,
  };
}

// ---------------------------------------------------------------------------
// Fetchers
// ---------------------------------------------------------------------------

export async function fetchRunList(
  api: HttpApi,
  opts?: { limit?: number; signal?: AbortSignal },
): Promise<{ runs: RunRow[]; total: number }> {
  let limit = opts?.limit ?? 10;
  if (limit < 1) limit = 1;
  if (limit > 50) limit = 50;

  const url = `/api/runs?limit=${limit}`;
  const response = await api.http.fetch(url, { signal: opts?.signal });

  if (!response.ok) {
    throw new Error(`run list failed: HTTP ${response.status}`);
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    throw new Error(`run list failed: HTTP ${response.status}`);
  }

  const payload = asRecord(json);
  if (!payload) throw new Error(`run list failed: HTTP ${response.status}`);

  const runsList = Array.isArray(payload.runs) ? payload.runs : [];
  const runs: RunRow[] = [];
  for (const rawRun of runsList) {
    const parsed = parseRunRow(rawRun);
    if (parsed) runs.push(parsed);
  }

  const total = finiteNumber(payload.total);
  return {
    runs,
    total: total !== null ? total : runs.length,
  };
}

export async function fetchRun(
  api: HttpApi,
  runId: string,
  signal?: AbortSignal,
): Promise<RunRow | null> {
  const url = `/api/runs/${encodeURIComponent(runId)}`;
  const response = await api.http.fetch(url, { signal });

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`fetch run failed: HTTP ${response.status}`);
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    throw new Error(`fetch run failed: HTTP ${response.status}`);
  }

  return parseRunRow(json);
}

export async function fetchRunArtifacts(
  api: HttpApi,
  runId: string,
  signal?: AbortSignal,
): Promise<RunArtifact[]> {
  try {
    const url = `/api/runs/${encodeURIComponent(runId)}/artifacts`;
    const response = await api.http.fetch(url, { signal });

    if (!response.ok) return [];

    let json: unknown;
    try {
      json = await response.json();
    } catch {
      return [];
    }

    const payload = asRecord(json);
    if (!payload) return [];

    const artifactsList = Array.isArray(payload.artifacts) ? payload.artifacts : [];
    const artifacts: RunArtifact[] = [];
    for (const rawArtifact of artifactsList) {
      const artifact = asRecord(rawArtifact);
      if (!artifact) continue;

      const kind = optionalString(artifact.kind);
      const path = optionalString(artifact.path);
      if (!kind || !path) continue;

      artifacts.push({
        kind,
        path,
        createdAt: optionalString(artifact.created_at),
      });
    }

    return artifacts;
  } catch {
    return [];
  }
}

export async function cancelRunById(api: HttpApi, runId: string): Promise<boolean> {
  try {
    const url = `/api/runs/${encodeURIComponent(runId)}/cancel`;
    const response = await api.http.fetch(url, { method: 'POST' });
    return response.ok;
  } catch {
    return false;
  }
}
