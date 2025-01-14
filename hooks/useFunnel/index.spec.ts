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
    test("pdfFunnel => techstackFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.pdfFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveBack();
      });

      expect(push).toHaveBeenCalledWith(pages.techstackFunnel);
    });

    test("techstackFunnel => infoFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.techstackFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveBack();
      });

      expect(push).toHaveBeenCalledWith(pages.infoFunnel);
    });
  });

  describe("moveNext Test", () => {
    test("infoFunnel => techstackFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.infoFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveNext();
      });

      expect(push).toHaveBeenCalledWith(pages.techstackFunnel);
    });

    test("techstackFunnel => pdfFunnel", () => {
      const push = vi.fn();
      (useRouter as Mock).mockReturnValue({ push });
      (usePathname as Mock).mockReturnValue(pages.techstackFunnel);

      const { result } = renderHook(() => useFunnel());
      act(() => {
        result.current.moveNext();
      });

      expect(push).toHaveBeenCalledWith(pages.pdfFunnel);
    });
  });
});
