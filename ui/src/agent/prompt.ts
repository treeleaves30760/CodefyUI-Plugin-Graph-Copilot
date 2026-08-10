/**
 * System prompt builder for Graph Copilot.
 *
 * Produces a compact token-efficient context from the live node catalog and
 * current graph state, and assembles the full system prompt.
 */

import type { NodeDefinition, ParamDefinition, SerializedGraph } from '../types/codefyui';
import {
  REDACTED_VALUE,
  isSensitiveKey,
  redactGraphForContext,
  redactSensitiveFields,
} from './historyRedaction';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Maximum characters kept in the graph JSON snapshot. */
export const GRAPH_CHAR_LIMIT = 30_000;

// ---------------------------------------------------------------------------
// compactCatalog
// ---------------------------------------------------------------------------

/**
 * Render a single ParamDefinition to the compact format:
 *   name:type=default{constraint}
 * where constraint is:
 *   - {min..max} for numeric ranges (either side blank when null)
 *   - {a|b|c}    for select options
 * Omitted entirely when both sides are null (no constraint).
 */
function formatParam(p: ParamDefinition): string {
  const sensitive = p.param_type === 'secret' || isSensitiveKey(p.name);
  const safeDefault = sensitive ? REDACTED_VALUE : redactSensitiveFields(p.default);
  // Render primitives with String(); non-primitives with JSON.stringify to avoid
  // "[object Object]". Cap the result at 60 chars to keep catalog lines readable.
  const rawDefault =
    safeDefault === null || safeDefault === undefined
      ? String(safeDefault)
      : typeof safeDefault === 'object'
      ? JSON.stringify(safeDefault)
      : String(safeDefault);
  const defaultStr = rawDefault.length > 60 ? rawDefault.slice(0, 60) + '...' : rawDefault;
  let constraint = '';

  if (p.param_type === 'select' && p.options.length > 0) {
    constraint = sensitive ? `{${REDACTED_VALUE}}` : `{${p.options.join('|')}}`;
  } else if (p.param_type === 'int' || p.param_type === 'float') {
    const hasMin = p.min_value !== null;
    const hasMax = p.max_value !== null;
    if (hasMin || hasMax) {
      const lo = hasMin ? String(p.min_value) : '';
      const hi = hasMax ? String(p.max_value) : '';
      constraint = `{${lo}..${hi}}`;
    }
  }

  return `${p.name}:${p.param_type}=${defaultStr}${constraint}`;
}

/**
 * Build a compact one-line-per-node catalog string.
 *
 * Format:
 *   NodeName: in[x:TYPE, ...] out[y:TYPE, ...] params[name:type=default{constraint}, ...] [category: Category]
 *
 * Sections (in[], out[], params[]) are omitted entirely when empty.
 */
export function compactCatalog(defs: NodeDefinition[]): string {
  return defs.map((def) => {
    const parts: string[] = [];

    if (def.inputs.length > 0) {
      const portList = def.inputs.map((p) => `${p.name}:${p.data_type}`).join(', ');
      parts.push(`in[${portList}]`);
    }
    if (def.outputs.length > 0) {
      const portList = def.outputs.map((p) => `${p.name}:${p.data_type}`).join(', ');
      parts.push(`out[${portList}]`);
    }
    if (def.params.length > 0) {
      const paramList = def.params.map(formatParam).join(', ');
      parts.push(`params[${paramList}]`);
    }

    const suffix = parts.length > 0 ? ' ' + parts.join(' ') : '';
    // Lead with the bare node-type name + colon so the model never mistakes
    // the category for part of the type. (Real codex bug: it emitted
    // node_type "Dataset (Data)" from the old "Name (Category):" format.)
    return `${def.node_name}:${suffix} [category: ${def.category}]`;
  }).join('\n');
}

// ---------------------------------------------------------------------------
// compactIndex
// ---------------------------------------------------------------------------

/**
 * Token-efficient one-line-per-node INDEX: name, category and a short
 * description only (no ports/params). The agent calls get_node_schemas to pull
 * exact ports/params on demand, keeping the per-round system prompt small.
 *
 * Format:  NodeName [Category] - short description
 */
export function compactIndex(defs: NodeDefinition[]): string {
  return defs.map((def) => {
    const desc = (def.description || '').replace(/\s+/g, ' ').trim();
    const shortDesc = desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
    return `${def.node_name} [${def.category}]${shortDesc ? ' - ' + shortDesc : ''}`;
  }).join('\n');
}

// ---------------------------------------------------------------------------
// graphSnapshot
// ---------------------------------------------------------------------------

/**
 * Serialize the graph to compact, always-valid JSON. Large graphs are reduced
 * at whole-node/whole-edge boundaries and carry explicit truncation metadata;
 * a raw character slice would leave the model with malformed JSON.
 */
export function graphSnapshot(
  graph: SerializedGraph,
  definitions: NodeDefinition[] = [],
): string {
  const safeGraph = redactGraphForContext(graph, definitions);
  const payload = JSON.stringify({ nodes: safeGraph.nodes, edges: safeGraph.edges });
  if (payload.length <= GRAPH_CHAR_LIMIT) {
    return payload;
  }

  const nodes: Array<Record<string, unknown>> = [];
  const edges: Array<Record<string, unknown>> = [];
  const marker = {
    originalNodes: safeGraph.nodes.length,
    includedNodes: 0,
    originalEdges: safeGraph.edges.length,
    includedEdges: 0,
    originalChars: payload.length,
    limit: GRAPH_CHAR_LIMIT,
  };
  const serialize = () => JSON.stringify({ nodes, edges, _truncated: marker });

  for (const node of safeGraph.nodes) {
    nodes.push(node as unknown as Record<string, unknown>);
    marker.includedNodes = nodes.length;
    if (serialize().length > GRAPH_CHAR_LIMIT) {
      nodes.pop();
      marker.includedNodes = nodes.length;
      break;
    }
  }

  // Preserve only edges whose endpoints are present in the reduced snapshot.
  const ids = new Set(nodes.map((node) => String(node.id ?? '')));
  for (const edge of safeGraph.edges) {
    if (!ids.has(String(edge.source ?? '')) || !ids.has(String(edge.target ?? ''))) continue;
    edges.push(edge as unknown as Record<string, unknown>);
    marker.includedEdges = edges.length;
    if (serialize().length > GRAPH_CHAR_LIMIT) {
      edges.pop();
      marker.includedEdges = edges.length;
      break;
    }
  }

  return serialize();
}

// ---------------------------------------------------------------------------
// buildSystemPrompt
// ---------------------------------------------------------------------------

/**
 * Assemble the full system prompt from the node catalog and current graph.
 */
export function buildSystemPrompt(defs: NodeDefinition[], graph: SerializedGraph): string {
  const index = compactIndex(defs);
  const snapshot = graphSnapshot(graph, defs);

  return `You are Graph Copilot, the agent embedded in CodefyUI, a visual node-graph editor for machine-learning pipelines. You build and repair graphs on the user's canvas through typed GraphOps, run canvas-isolated experiments when explicitly authorized, optimize against measured metrics, and turn observations into testable research hypotheses.

## Operating principles
- You are an agent. Keep working, across as many tool rounds as needed, until the request is fully handled; only then reply. Never end with a half-built graph unless you are truly blocked, and then say exactly what is missing and why.
- Ground every claim in tool results from this conversation. Never invent node types, port names, param values, or experiment numbers.
- Bias to action. Canvas edits are reversible (one batch = one undo step), so plan briefly and build instead of asking permission. Ask first only when the request is ambiguous in a way that changes what you would build, or before destructive or costly actions (clear_graph, executing experiments).
- When a tool result contradicts your assumption, the tool result wins — re-plan from it.
- Values shown as [REDACTED] are secrets deliberately hidden from you. Never guess, fabricate, echo, or overwrite them unless the user supplies a new value in chat.

## How to build (follow in order)
1. Plan — 1-2 sentences naming the nodes you intend and the data/control flow between them. For a COMPLEX build (roughly 8+ nodes or several subsystems), first call research with 2-4 independent sub-questions (e.g. data pipeline / model / training loop) and fold the answers into the plan.
2. Look up schemas — call get_node_schemas for every node type you plan to touch. Port and param names must come from schemas or the current graph, never from memory.
3. Build — apply_graph_operations in small batches (add_node with a "ref", connect, set_params), ending each structural batch with one auto_layout. Prefer several small batches over one enormous batch.
4. Verify — call validate_graph, fix every reported error with more operations, and validate again. Repeat until it reports "valid": true.
5. Report — summarize what changed in 1-2 sentences, in the user's language.

## Recovering from errors
- Failing ops are skipped and reported per index; the other ops in the batch DID apply. Re-send only corrected versions of the failed ops — re-sending the whole batch duplicates nodes.
- Read each error message and fix its cause: a wrong port name (re-check schemas), a wrong node id (use the "refs" map or "node_id" from the previous result, or get_current_graph), or an out-of-range param.
- "ref" aliases exist only inside their own batch. In later batches, use real node ids.
- After two failed attempts at the same fix, step back: re-read the current graph, question the plan, and try a different construction rather than repeating the same edit.

## Completion contract
A build/edit request is done only when every REQUIRED input is connected, params respect their declared types and ranges, and validate_graph returned "valid": true for the current revision. If you cannot get there, state plainly that the graph is not runnable yet and list the remaining errors — never present an unvalidated graph as success.

## Experiments and research
When the user asks to test, compare, optimize, ablate, or explore research ideas:
1. Before proposing runs, state a falsifiable hypothesis, ONE numeric metric, and its direction (maximize or minimize). Never invent or extrapolate a measured result.
2. Pick the right tool: run_graph_experiments for explicit comparisons and structural ablations; optimize_graph_parameters for searches over existing int/float/bool/select params, as a complete small grid or a uint32-seeded random plan (the seed makes planning repeatable; it does NOT seed graph execution). Never optimize secret/file/tensor/unknown params.
3. Design for evidence: include an explicit baseline plus focused variants, change one factor at a time, and use at least 3 repetitions when the user wants reliable evidence — otherwise label the result a pilot. Repetitions reuse the same candidate graph; do not call them independent seeds unless the graph itself randomizes or exposes a seed schedule. Include seed controls and held-out evaluation when the graph exposes them.
4. Respect cost and consent: both tools share one UI confirmation and a 16-execution budget per turn, and a chat instruction alone is never consent. Candidate graphs are canvas-isolated but NOT side-effect-free — nodes may write files, call networks, or spend API/GPU budget. State the planned run count before the confirmation appears.
5. Set apply_best=true only when the user explicitly asked to optimize or apply the winner. Promotion is parameter-only and refuses if the live graph changed mid-study; structural winners stay proposals for review.
6. Report faithfully: the unique winner or the exact tie, effect sizes as measured, failures and variance limits, and the next experiment a stronger claim would need. Experiment output is evidence, not proof — no novelty or significance claims without enough independent runs and an appropriate test.

## Graph model
Each node has a type (the bare name from the index), typed input/output ports, and params. Edges connect an output handle to an input handle; the connected data types must be compatible. Some pipelines need a control-flow trigger from a Start node (connect with source_handle "trigger").

## Rules
- Use the exact node-type name from the index — the bare name only (e.g. Dataset), never the trailing "[category: ...]" tag.
- Connect every REQUIRED input of nodes you add; validate_graph reports the ones you missed.
- Never use clear_graph unless the user explicitly asked to start over.
- Do not remove or rewire nodes the user built unless the request requires it — and say so when you do.

## Style
- Reply in the user's language.
- Match the shape of the request: a question gets a direct answer; a build gets a brief plan, the work, and a 1-2 sentence summary of what changed. No filler openers, no restating the request.
- Use \`code\` for node types, ports, and params; keep paragraphs and lists short; skip headings unless the reply is genuinely long.
- Present measured numbers exactly as reported, with the metric name and direction.

## Node catalog index (NodeName [Category] - description). Call get_node_schemas for exact ports/params.
${index}

## Current graph
${snapshot}`;
}
