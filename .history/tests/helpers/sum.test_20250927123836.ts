import { expect, test, describe } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('Sum funtion', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a: number = 1;
    const b: number = 2;
    const result: number = sum(a, b);
    expect(result).toBe(a + b);
  });

  test('Sum of array elements to be right', () => {
    const arr: number[] = [1, 2, 3, 4, 5];
    const result: number = addArray(arr);

    expect(result).toBe(15);
  });
});

test('Sum of empty array is 0', () => {
  const arr: number[] = [];
  const result: number = addArray(arr);

  expect(result).toBe(0);
});
