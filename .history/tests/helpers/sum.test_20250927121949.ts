import { expect, test } from 'vitest';
import { addArray } from '@/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(addArray(1, 2)).toBe(3);
});
