import { describe, it, expect } from 'vitest';
import { finiteNumber, normalizeNodeStatus } from './wireOutputs';

describe('finiteNumber', () => {
  it('accepts finite numbers and booleans, refuses the rest', () => {
    expect(finiteNumber(3.5)).toBe(3.5);
    expect(finiteNumber(0)).toBe(0);
    expect(finiteNumber(true)).toBe(1);
    expect(finiteNumber(false)).toBe(0);
    expect(finiteNumber(Number.NaN)).toBeUndefined();
    expect(finiteNumber(Number.POSITIVE_INFINITY)).toBeUndefined();
    expect(finiteNumber('3')).toBeUndefined();
    expect(finiteNumber(null)).toBeUndefined();
  });
});

describe('normalizeNodeStatus — legacy 1.3.0 shape', () => {
  it('collects per-port scalars and strings from output_summary', () => {
    const normalized = normalizeNodeStatus({
      type: 'node_status',
      node_id: 'n1',
      status: 'completed',
      output_summary: {
        accuracy: { type: 'scalar', value: 0.93 },
        label: { type: 'string', value: 'hello' },
        broken: { type: 'scalar', value: Number.NaN },
        junk: 'not-an-object',
      },
    });
    expect(normalized.scalars).toEqual({ accuracy: 0.93 });
    expect(normalized.strings).toEqual({ label: 'hello' });
    expect(normalized.progress).toBeNull();
  });

  it('passes the legacy progress payload through', () => {
    const normalized = normalizeNodeStatus({
      progress: { epoch: 2, loss: 1.5, note: 'x' },
    });
    expect(normalized.progress).toEqual({ epoch: 2, loss: 1.5, note: 'x' });
  });
});

describe('normalizeNodeStatus — current typed outputs shape', () => {
  it('collects tensor_summary scalars, strings and model params', () => {
    const normalized = normalizeNodeStatus({
      outputs: [
        {
          output_kind: 'tensor_summary',
          tensor_summary: {
            perplexity: { type: 'scalar', value: 12.7 },
            text: { type: 'string', value: 'Once upon a time' },
            model: { type: 'model', class: 'CausalLM', params: 202_000_000, trainable: 201_500_000 },
            weights: { type: 'tensor', shape: [4, 4], dtype: 'torch.float32' },
          },
        },
      ],
    });
    expect(normalized.scalars).toEqual({ perplexity: 12.7 });
    expect(normalized.strings).toEqual({ text: 'Once upon a time' });
    expect(normalized.modelParams).toEqual({ model: 201_500_000 });
  });

  it('takes the latest progress entry and collects text entries', () => {
    const normalized = normalizeNodeStatus({
      outputs: [
        { output_kind: 'progress', progress: { event: 'batch', loss: 3.1 } },
        { output_kind: 'text', text: 'step logged' },
        { output_kind: 'progress', progress: { event: 'epoch', loss: 2.4 } },
        { output_kind: 'image', port: 'plot', image: { data: 'AAAA' } },
      ],
    });
    expect(normalized.progress).toEqual({ event: 'epoch', loss: 2.4 });
    expect(normalized.texts).toEqual(['step logged']);
  });

  it('caps collected strings at 200 characters', () => {
    const long = 'x'.repeat(500);
    const normalized = normalizeNodeStatus({
      outputs: [
        { output_kind: 'tensor_summary', tensor_summary: { text: { type: 'string', value: long } } },
      ],
    });
    expect(normalized.strings.text).toHaveLength(200);
  });

  it('never throws on malformed payloads', () => {
    expect(normalizeNodeStatus({})).toEqual({
      scalars: {}, strings: {}, modelParams: {}, progress: null, texts: [],
    });
    expect(() => normalizeNodeStatus({
      outputs: [null, 42, 'nope', { output_kind: 'progress', progress: 'bad' }],
      output_summary: 'bad',
      progress: ['bad'],
    })).not.toThrow();
  });
});
