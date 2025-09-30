import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

test('Sum of array elements to be 15', () => {
  const a = 1;
  const b = 2;
  const result = sum(a, b);
  expect(result).toBe(a + b);
});

test('Sum of array elements to be 15', () => {
  expect(addArray([1, 2, 3, 4, 5])).toBe(15);
});
