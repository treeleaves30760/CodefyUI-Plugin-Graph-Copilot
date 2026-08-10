/**
 * wireOutputs — normalize `/ws/execution` node_status payloads across host
 * generations.
 *
 * CodefyUI 1.3.0 put per-port scalar summaries on `message.output_summary`
 * (`{port: {value}}`) and live training frames on `message.progress`
 * (`{name: number}`). Current hosts ship a typed `outputs` entry list
 * instead: `{output_kind, <kind>: payload, port?}` with kinds `progress`,
 * `tensor_summary`, `text`, `image`, `chart`. The plugin supports both
 * generations, so every consumer parses through this module instead of
 * reading raw message fields.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NormalizedNodeStatus {
  /** Per-port numeric values (finite numbers only), keyed by port name. */
  scalars: Record<string, number>;
  /** Per-port short strings (hosts truncate to ~200 chars), keyed by port. */
  strings: Record<string, string>;
  /** Trainable-parameter counts from model summaries, keyed by port. */
  modelParams: Record<string, number>;
  /** Latest live progress payload (training frames etc.), or null. */
  progress: Record<string, unknown> | null;
  /** Log/text lines (Print node output etc.). */
  texts: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function finiteNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'boolean') return value ? 1 : 0;
  return undefined;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

/** Fold one per-port summary object ({type, value, ...}) into the result. */
function collectPortSummary(
  out: NormalizedNodeStatus,
  port: string,
  raw: unknown,
): void {
  const summary = asRecord(raw);
  if (!summary) return;
  const kind = typeof summary.type === 'string' ? summary.type : '';
  if (kind === 'model') {
    const params = finiteNumber(summary.trainable ?? summary.params);
    if (params !== undefined) out.modelParams[port] = params;
    return;
  }
  const value = summary.value;
  const num = finiteNumber(value);
  if (num !== undefined) {
    out.scalars[port] = num;
    return;
  }
  if (typeof value === 'string' && value.length > 0) {
    out.strings[port] = value.slice(0, 200);
  }
}

// ---------------------------------------------------------------------------
// normalizeNodeStatus
// ---------------------------------------------------------------------------

/**
 * Parse one `node_status` message (either host generation) into a normalized
 * shape. Never throws on malformed data — unknown pieces are skipped.
 */
export function normalizeNodeStatus(
  message: Record<string, unknown>,
): NormalizedNodeStatus {
  const out: NormalizedNodeStatus = {
    scalars: {},
    strings: {},
    modelParams: {},
    progress: null,
    texts: [],
  };

  // Legacy 1.3.0 shape: per-port summaries + live progress on the message.
  const legacySummary = asRecord(message.output_summary);
  if (legacySummary) {
    for (const [port, raw] of Object.entries(legacySummary)) {
      collectPortSummary(out, port, raw);
    }
  }
  const legacyProgress = asRecord(message.progress);
  if (legacyProgress) out.progress = legacyProgress;

  // Current shape: a typed outputs entry list.
  const entries = Array.isArray(message.outputs) ? message.outputs : [];
  for (const rawEntry of entries) {
    const entry = asRecord(rawEntry);
    if (!entry) continue;
    const kind = typeof entry.output_kind === 'string' ? entry.output_kind : '';
    if (kind === 'progress') {
      const payload = asRecord(entry.progress);
      if (payload) out.progress = payload;
    } else if (kind === 'tensor_summary') {
      const summary = asRecord(entry.tensor_summary);
      if (summary) {
        for (const [port, raw] of Object.entries(summary)) {
          collectPortSummary(out, port, raw);
        }
      }
    } else if (kind === 'text') {
      if (typeof entry.text === 'string' && entry.text.length > 0) {
        out.texts.push(entry.text);
      }
    }
    // image / chart / unknown kinds carry payloads the agent cannot use.
  }

  return out;
}
