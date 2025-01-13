import { useRouter, usePathname } from "next/navigation";
import useFunnel from "./index";
import { describe, expect, Mock, test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { pages } from "@/constants/pages";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

describe("useFunnel Test", () => {
  describe("moveBack Test", () => {
    test("pdfFunnel => backFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.pdfFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveBack();
      });

      expect(push).toHaveBeenCalledWith(pages.backFunnel);
    });

    test("backFunnel => frontFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.backFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveBack();
      });

      expect(push).toHaveBeenCalledWith(pages.frontFunnel);
    });

    test("frontFunnel => infoFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.frontFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveBack();
      });

      expect(push).toHaveBeenCalledWith(pages.infoFunnel);
    });
  });

  describe("moveNext Test", () => {
    test("infoFunnel => frontFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.infoFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveNext();
      });

      expect(push).toHaveBeenCalledWith(pages.frontFunnel);
    });

    test("frontFunnel => backFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.frontFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveNext();
      });

      expect(push).toHaveBeenCalledWith(pages.backFunnel);
    });

    test("backFunnel => pdfFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.backFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveNext();
      });

      expect(push).toHaveBeenCalledWith(pages.pdfFunnel);
    });
  });
});
