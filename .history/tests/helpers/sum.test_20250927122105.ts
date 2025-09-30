import { expect, test } from 'vitest';
import { addArray } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(addArray([1, 2, 3, 4, 5])).toBe(15);
});
