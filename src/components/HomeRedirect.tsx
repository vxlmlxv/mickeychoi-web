"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  // delay (ms) to wait before redirecting so page animations can play
  delay?: number;
};

export default function HomeRedirect({ delay = 1200 }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to === "about") {
      const t = setTimeout(() => {
        router.push("/about");
      }, delay);
      return () => clearTimeout(t);
    }
  }, [router, delay]);

  return null;
}
