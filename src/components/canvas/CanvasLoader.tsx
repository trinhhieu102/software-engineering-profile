"use client";

import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
      <p className="text-xs font-mono text-cyan-400 mt-4 tracking-widest uppercase">
        {progress !== 0 ? `${progress.toFixed(0)}%` : "Initializing 3D..."}
      </p>
    </Html>
  );
}
