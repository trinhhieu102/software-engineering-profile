import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-4 tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>{tag}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
        <span className="linear-gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
