import { test, expect } from "@jest/globals";
import countUniqueValues from "./countUniqueValues";

test("count unique value", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
  expect(countUniqueValues([])).toEqual(0);
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
});
