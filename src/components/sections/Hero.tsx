"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/constants";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import TextScramble from "../ui/TextScramble";

// Dynamic import of 3D Scene with SSR false for peak performance and fast FCP
const HeroScene = dynamic(() => import("../canvas/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center relative overflow-hidden">
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-sky-950 via-blue-900/40 to-emerald-950 border border-sky-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] animate-pulse" />
        <div className="absolute inset-0 rounded-full border border-sky-400/20 border-t-sky-400/80 animate-spin" />
      </div>
    </div>
  ),
});

export default function Hero() {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden linear-grid linear-spotlight"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300 font-medium tracking-wide">
                {PORTFOLIO_DATA.personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                Software Engineering & Architecture
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-shimmer-silver leading-[1.1] pb-1">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-300">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-black bg-white hover:bg-zinc-200 shadow-md shadow-white/5 transition-all hover:scale-[1.02] active:scale-[0.98] text-xs uppercase tracking-wider font-mono"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#terminal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Open Dev Console</span>
              </Link>
            </div>

            {/* Quick Stats Grid with Sleek Glassmorphism Cards & Hover Neon Glow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => {
                const isNumeric = /^[\d.]+/.test(stat.value);

                return (
                  <div
                    key={idx}
                    className="group/stat relative p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] overflow-hidden flex flex-col justify-between"
                  >
                    {/* Ambient Glow Background on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Subtle Top Border Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover/stat:via-emerald-500/20 transition-all duration-500" />

                    <p className="text-2xl sm:text-3xl font-bold font-mono text-white group-hover/stat:text-emerald-400 transition-all duration-300 group-hover/stat:drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                      {isNumeric ? (
                        <AnimatedCounter value={stat.value} duration={1600 + idx * 200} />
                      ) : (
                        <TextScramble text={stat.value} duration={900} />
                      )}
                    </p>
                    
                    <p className="text-[10px] text-zinc-500 group-hover/stat:text-zinc-400 uppercase tracking-wider font-mono mt-1 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Earth Orbit Structure */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className={`w-full relative rounded-2xl linear-card p-2 border transition-all duration-700 ${
                isZoomed ? "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]" : "border-zinc-800"
              }`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              {/* Interactive badge */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 backdrop-blur-md">
                <span className={`w-1.5 h-1.5 rounded-full ${isZoomed ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
                <span>
                  {isZoomed ? "Entering Dev Node... • Zoom Active" : "3D Earth Orbit • Drag to Rotate"}
                </span>
              </div>

              {/* 3D Canvas Scene */}
              <HeroScene isZoomed={isZoomed} />

              {/* Bottom tech badges */}
              <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-500 backdrop-blur-md">
                  WebGL 2.0
                </span>
                <span className={`px-2 py-0.5 rounded bg-zinc-950/80 border text-[10px] font-mono transition-all duration-300 backdrop-blur-md ${
                  isZoomed 
                    ? 'border-emerald-500/50 text-emerald-400 font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse' 
                    : 'border-zinc-800/80 text-emerald-400/80'
                }`}>
                  {isZoomed ? "120 FPS (ACTIVE)" : "120 FPS"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
