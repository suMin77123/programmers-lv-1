import { expect, test } from "@jest/globals";
import maxSubarraySum from "./maxSubarraySum";

test("정렬되지 않은 정수 배열과, 수가 주어질 때 주어진 수만큼 배열에서 연속된 요소의 합이 제일 큰 값을 찾는 문제", () => {
  expect(maxSubarraySum([1, 1, 1, 4, 2, 4, 2, 4, 9], 3)).toEqual(15);
  expect(
    maxSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)
  ).toEqual(5);
  expect(
    maxSubarraySum(
      [8, 3, 74, 45, 42, 6, 6, 6, 1, 1, 1, 1, 1, 54, 523, 6, 63, 643, 4, 2],
      7
    )
  ).toEqual(1295);
  expect(maxSubarraySum([1, 5, 3, 3, 5, 6, 7, 2, 3, 4, 6], 6)).toEqual(29);
  expect(maxSubarraySum([], 5)).toEqual(null);
});
