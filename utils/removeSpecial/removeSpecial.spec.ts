import { describe, expect, test } from "vitest";
import { removeSpecial, removeEmoji } from ".";

describe("입력된 텍스트의 특수문자를 제거한다", () => {
  const TEST_CASE = [
    {
      input: "!@#$%^&*()_+",
      expected_output: "",
    },
    {
      input: "hello@world#",
      expected_output: "helloworld",
    },
    {
      input: "특수문자 !만 있는 경우",
      expected_output: "특수문자 만 있는 경우",
    },
    {
      input: "공백과 @ 특수문자   !",
      expected_output: "공백과  특수문자   ",
    },
    {
      input: "1234@#$5678",
      expected_output: "12345678",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(removeSpecial(input)).toBe(expected_output);
    });
  });
});

describe("입력된 텍스트의 모든 이모지를 제거한다", () => {
  const TEST_CASE = [
    {
      input: "😊😂😎🔥💬",
      expected_output: "",
    },
    {
      input: "이모지 😊만 포함된 경우",
      expected_output: "이모지 만 포함된 경우",
    },
    {
      input: "이모지와 🌟텍스트✨ 혼합",
      expected_output: "이모지와 텍스트 혼합",
    },
    {
      input: "1234😊5678",
      expected_output: "12345678",
    },
    {
      input: "Hello🌍World",
      expected_output: "HelloWorld",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(removeEmoji(input)).toBe(expected_output);
    });
  });
});
