"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./StarsCanvas"), {
  ssr: false,
});

export default function StarsWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer starfield canvas initialization until after initial FCP/LCP paint
    if ("requestIdleCallback" in window) {
      const handle = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => {
          setMounted(true);
        },
        { timeout: 2000 }
      );
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(() => setMounted(true), 250);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;
  return <StarsCanvas />;
}
