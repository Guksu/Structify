import { describe, expect, test } from "vitest";
import { removeAllSpace, removeChainSpace } from ".";

describe("입력된 텍스트의 연속적인 공백을 제거한다", () => {
  const TEST_CASE = [
    {
      input: "   Hello World   ",
      expected_output: "Hello World",
    },
    {
      input: "Hello     World",
      expected_output: "Hello World",
    },
    {
      input: "     ",
      expected_output: "",
    },
    {
      input: "",
      expected_output: "",
    },
    {
      input: "Hello\t\tWorld",
      expected_output: "Hello World",
    },
    {
      input: "Hello\n\nWorld",
      expected_output: "Hello World",
    },
    {
      input: "Hello \n\t World",
      expected_output: "Hello World",
    },
    {
      input: "Hello\u00A0World",
      expected_output: "Hello World",
    },
    {
      input: "  @Hello   #World!  ",
      expected_output: "@Hello #World!",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(removeChainSpace(input)).toBe(expected_output);
    });
  });
});

describe("입력된 텍스트의 모든 공백을 제거한다", () => {
  const TEST_CASE = [
    {
      input: "   Hello World   ",
      expected_output: "HelloWorld",
    },
    {
      input: "Hello     World",
      expected_output: "HelloWorld",
    },
    {
      input: "     ",
      expected_output: "",
    },
    {
      input: "",
      expected_output: "",
    },
    {
      input: "Hello\t\tWorld",
      expected_output: "HelloWorld",
    },
    {
      input: "Hello\n\nWorld",
      expected_output: "HelloWorld",
    },
    {
      input: "Hello \n\t World",
      expected_output: "HelloWorld",
    },
    {
      input: "Hello\u00A0World",
      expected_output: "HelloWorld",
    },
    {
      input: "  @Hello   #World!  ",
      expected_output: "@Hello#World!",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(removeAllSpace(input)).toBe(expected_output);
    });
  });
});
