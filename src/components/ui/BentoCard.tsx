"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "emerald" | "amber" | "sky" | "cyan" | "purple" | "slate";
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  const variantStyles: Record<string, string> = {
    neutral: "border-zinc-800 bg-zinc-900/60 text-zinc-300",
    emerald: "border-emerald-500/20 bg-emerald-950/30 text-emerald-300",
    amber: "border-amber-500/20 bg-amber-950/30 text-amber-300",
    sky: "border-sky-500/20 bg-sky-950/30 text-sky-300",
    cyan: "border-zinc-800 bg-zinc-900/60 text-zinc-300",
    purple: "border-zinc-800 bg-zinc-900/60 text-zinc-300",
    slate: "border-zinc-800 bg-zinc-900/60 text-zinc-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border backdrop-blur-sm transition-colors",
        variantStyles[variant] || variantStyles.neutral,
        className
      )}
    >
      {children}
    </span>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function BentoCard({ children, className, glow = false }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{
    transform: string;
    spotlightX: number;
    spotlightY: number;
    opacity: number;
  }>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    spotlightX: 0,
    spotlightY: 0,
    opacity: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth 3D tilt calculation (max 6 degrees)
    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      spotlightX: x,
      spotlightY: y,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle((prev) => ({
      ...prev,
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      opacity: 0,
    }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: style.transform,
        transition: "transform 0.25s cubic-bezier(0.2, 0, 0, 1), border-color 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl p-6 md:p-8 linear-card overflow-hidden select-none cursor-default",
        className
      )}
    >
      {/* 3D Mouse Following Spotlight Halo */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: style.opacity,
          background: `radial-gradient(450px circle at ${style.spotlightX}px ${style.spotlightY}px, rgba(255, 255, 255, 0.08), transparent 75%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
