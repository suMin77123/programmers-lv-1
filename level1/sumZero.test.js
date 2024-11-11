import { expect, test } from "@jest/globals";
import sumZero from "./sumZero";

test("input: sorted Array output: sum zero two value", () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  expect(sumZero([-3, -2, -1, 2, 5])).toEqual([-2, 2]);
  expect(sumZero([-3, -2, -1, 4, 5])).toEqual(null);
  expect(sumZero([-3, -2, -1])).toEqual(null);
  expect(sumZero([0, 0])).toEqual([0, 0]);
});
