"use client";

import { useState, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { BentoCard, Badge } from "../ui/BentoCard";
import { PORTFOLIO_DATA } from "@/constants";
import {
  Code,
  Globe,
  Clock,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function AboutBento() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Overview"
        title="Background & Architecture Mindset"
        subtitle="Designing resilient systems and fluid digital experiences through solid computer science fundamentals, modular architectures, and clean code."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {/* Large Bento Card: Bio & Core Mission */}
        <BentoCard className="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
              <Code className="w-4 h-4" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Software Engineer focused on high concurrency, distributed systems & clean interfaces.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800/80 flex flex-wrap gap-2">
            <Badge variant="neutral">Clean Architecture</Badge>
            <Badge variant="neutral">Distributed Systems</Badge>
            <Badge variant="neutral">High Concurrency</Badge>
            <Badge variant="neutral">CI/CD Automation</Badge>
          </div>
        </BentoCard>

        {/* Card 2: Live Time & Location */}
        <BentoCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                <Globe className="w-4 h-4" />
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Base Location</h3>
            <p className="text-xs text-zinc-400">{PORTFOLIO_DATA.personal.location}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 font-mono mt-6">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-1">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>Local Time (UTC+7)</span>
            </div>
            <p className="text-lg font-bold text-white tracking-wider">
              {time || "10:00:00 PM"}
            </p>
          </div>
        </BentoCard>

        {/* Card 3: Performance & Uptime Metric */}
        <BentoCard className="flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-2">System Standards</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every deployment meets strict observability, low latency, and zero single points of failure.
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-400">Target Uptime</span>
              <span className="text-emerald-400 font-bold">99.99%</span>
            </div>
            <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
              <div className="bg-emerald-500 h-1 rounded-full w-[99.9%]" />
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-400">Core Web Vitals</span>
              <span className="text-zinc-200 font-bold">98/100</span>
            </div>
            <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
              <div className="bg-zinc-200 h-1 rounded-full w-[98%]" />
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Engineering Principles */}
        <BentoCard className="md:col-span-3 lg:col-span-4">
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-4 h-4 text-zinc-300" />
            <h3 className="text-base font-bold text-white">Engineering Principles</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Maintainability</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Clear modularization, strict type safety, and self-documenting code.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Scalability</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Horizontal scaling, efficient caching strategies, and event-driven decoupled systems.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Observability</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Structured logging, distributed tracing, and real-time metric alerts.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Security First</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                OWASP top 10 adherence, principle of least privilege, and zero-trust authentication.
              </p>
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
