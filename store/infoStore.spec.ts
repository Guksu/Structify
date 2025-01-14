import { describe, test, expect, beforeEach } from "vitest";
import infoStore from "./infoStore";

describe("infoStore Actions Test", () => {
  const MOCK_DATE = new Date("2023-01-01");
  beforeEach(() => {
    infoStore.getState().reset();
    infoStore.getState().setFrom(MOCK_DATE);
    infoStore.getState().setTo(MOCK_DATE);
  });

  // test("title 연속된 공백 제거", () => {
  //   infoStore.getState().setTitle("Test  Title");
  //   expect(infoStore.getState().title).toBe("Test Title");
  // });

  test("from 날짜 입력", () => {
    const fromDate = new Date("2022-12-01");
    infoStore.getState().setFrom(fromDate);
    expect(infoStore.getState().from).toBe(fromDate);
  });

  test("from이 to보다 이후면 to로 설정", () => {
    const toDate = new Date("2023-01-01");
    infoStore.getState().setTo(toDate);
    const fromDate = new Date("2023-02-01");
    infoStore.getState().setFrom(fromDate);
    expect(infoStore.getState().from).toBe(toDate);
  });

  test("to 날자 입력", () => {
    const toDate = new Date("2023-01-01");
    infoStore.getState().setTo(toDate);
    expect(infoStore.getState().to).toBe(toDate);
  });

  test("to가 from이전이면 from으로 설정", () => {
    const fromDate = new Date("2022-12-01");
    infoStore.getState().setFrom(fromDate);
    const toDate = new Date("2022-11-01");
    infoStore.getState().setTo(toDate);
    expect(infoStore.getState().to).toBe(fromDate);
  });

  // test("desc의 연속된 공백 제거", () => {
  //   infoStore.getState().setDescription("Test  Description");
  //   expect(infoStore.getState().description).toBe("Test Description");
  // });
});
