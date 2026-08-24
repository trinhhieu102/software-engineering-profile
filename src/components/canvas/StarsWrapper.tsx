"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./StarsCanvas"), {
  ssr: false,
});

export default function StarsWrapper() {
  return <StarsCanvas />;
}
