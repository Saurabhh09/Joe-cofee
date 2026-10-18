import test from 'node:test';
import assert from 'node:assert/strict';
import { interpolate } from './useScrollAnimation.ts';

test('interpolate handles normal progress within range', () => {
  const result = interpolate(0.5, [0, 1], [10, 20]);
  assert.equal(result, 15);
});

test('interpolate clamps values below min and above max', () => {
  assert.equal(interpolate(-0.5, [0, 1], [10, 20]), 10);
  assert.equal(interpolate(1.5, [0, 1], [10, 20]), 20);
});

test('interpolate handles NaN input without throwing or returning NaN', () => {
  const result = interpolate(NaN, [0.05, 0.35], [0.8, 1.0]);
  assert.equal(Number.isFinite(result), true);
  assert.equal(result, 0.8);
});

test('interpolate handles Infinity input safely', () => {
  const result = interpolate(Infinity, [0, 1], [0, 100]);
  assert.equal(Number.isFinite(result), true);
  assert.equal(result, 0);
});

test('interpolate handles identical input bounds gracefully', () => {
  const result = interpolate(0.5, [1, 1], [10, 20]);
  assert.equal(Number.isFinite(result), true);
  assert.equal(result, 10);
});
