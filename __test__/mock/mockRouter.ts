import { vi } from "vitest";

const mockRouter = vi.hoisted(() => {
  return {
    useRouter: vi.fn(),
  };
});

vi.mock("next/router", async () => {
  const router = await vi.importActual("next/router");
  return { ...router, useRouter: mockRouter.useRouter };
});

export { mockRouter };
