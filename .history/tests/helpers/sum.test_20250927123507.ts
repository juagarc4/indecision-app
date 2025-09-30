import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;
  const result = sum(a, b);
  expect(result).toBe(a + b);
});

test('Sum of array elements to be right', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = addArray([1, 2, 3, 4, 5];

  expect(result).toBe(15);
});

test('Sum of empty array is 0', () => {
  expect(addArray([])).toBe(0);
});
