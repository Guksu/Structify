import { pages } from "@/constants/pages";
import { useRouter, usePathname } from "next/navigation";

export default function useFunnel() {
  const router = useRouter();
  const pathname = usePathname();

  const moveNext = () => {
    switch (pathname) {
      case pages.infoFunnel:
        router.push(pages.techstackFunnel);
        break;
      case pages.techstackFunnel:
        router.push(pages.pdfFunnel);
        break;
      default:
        router.push(pages.infoFunnel);
    }
  };

  const moveBack = () => {
    switch (pathname) {
      case pages.pdfFunnel:
        router.push(pages.techstackFunnel);
        break;
      case pages.techstackFunnel:
        router.push(pages.infoFunnel);
        break;
      default:
        router.push(pages.infoFunnel);
    }
  };

  return { moveNext, moveBack };
}
