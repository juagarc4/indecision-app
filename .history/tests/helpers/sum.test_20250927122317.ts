import { expect, test } from 'vitest';
import { addArray } from '../../src/helpers/sum';

test('Sum of array elements to be 15', () => {
  expect(addArray([1, 2, 3, 4, 5])).toBe(15);
});
