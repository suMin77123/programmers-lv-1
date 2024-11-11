import { expect, test } from "@jest/globals";
import validAnagram from "./validAnagram";

test("anagram validation check", () => {
  expect(validAnagram("", "")).toEqual(true);
  expect(validAnagram("aaz", "zza")).toEqual(false);
  expect(validAnagram("apple", "apple")).toEqual(true);
  expect(validAnagram("asdfasdf", "aassddff")).toEqual(true);
  expect(
    validAnagram(
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
      "aassddffaassddffaassddffaassddffaassddffaassddffaassddffaassddffaassddffaassddff"
    )
  ).toEqual(true);

  expect(validAnagram("sdfsdfsdfsdfsdf", "sfsfsfsfsfsddfsfsfsfsfsfsf")).toEqual(
    false
  );
});
