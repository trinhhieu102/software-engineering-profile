"use client";

import React from "react";
import {
  NextjsLogo,
  ReactLogo,
  TypeScriptLogo,
  GoLogo,
  PythonLogo,
  PostgreSQLLogo,
  RedisLogo,
  DockerLogo,
  ThreejsLogo,
  GsapLogo,
  KafkaLogo,
  GraphQLLogo,
  TailwindLogo,
  GitLogo,
  LinuxLogo,
  CEFRLogo,
} from "./TechLogos";

interface TechItem {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  { name: "Next.js 15", category: "Full Stack Framework", logo: <NextjsLogo className="w-5 h-5" /> },
  { name: "React 19", category: "Frontend UI Library", logo: <ReactLogo className="w-5 h-5" /> },
  { name: "TypeScript", category: "Type-Safe Language", logo: <TypeScriptLogo className="w-5 h-5" /> },
  { name: "Go (Golang)", category: "Backend Microservices", logo: <GoLogo className="w-5 h-5" /> },
  { name: "Python", category: "APIs & Data Analysis", logo: <PythonLogo className="w-5 h-5" /> },
  { name: "Three.js & WebGL", category: "3D Graphics Engine", logo: <ThreejsLogo className="w-5 h-5" /> },
  { name: "GSAP Motion", category: "UI Animation Library", logo: <GsapLogo className="w-5 h-5" /> },
  { name: "PostgreSQL", category: "Relational Database", logo: <PostgreSQLLogo className="w-5 h-5" /> },
  { name: "Redis", category: "In-Memory Caching", logo: <RedisLogo className="w-5 h-5" /> },
  { name: "Docker", category: "Container Engine", logo: <DockerLogo className="w-5 h-5" /> },
  { name: "Apache Kafka", category: "Event Stream Broker", logo: <KafkaLogo className="w-5 h-5" /> },
  { name: "GraphQL", category: "API Query Language", logo: <GraphQLLogo className="w-5 h-5" /> },
  { name: "Tailwind CSS", category: "Utility-First Styling", logo: <TailwindLogo className="w-5 h-5" /> },
  { name: "Git", category: "Version Control System", logo: <GitLogo className="w-5 h-5" /> },
  { name: "Linux", category: "Server & Operating System", logo: <LinuxLogo className="w-5 h-5" /> },
  { name: "English B2", category: "CEFR Global Proficiency", logo: <CEFRLogo className="w-5 h-5" /> },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md z-20">
      {/* Left & Right Soft Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-black via-black/85 to-transparent z-10" />

      {/* Infinite Seamless Moving Track */}
      <div className="flex w-max animate-marquee gap-3 sm:gap-4 hover:[animation-play-state:paused]">
        {/* Track 1 */}
        {TECH_STACK.map((tech, idx) => (
          <div
            key={`t1-${idx}`}
            className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-850 transition-all shadow-md cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-black/80 border border-zinc-800 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 group-hover:border-zinc-700 transition-all">
              {tech.logo}
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="text-sm font-bold text-zinc-100 font-sans tracking-tight whitespace-nowrap leading-tight group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-xs font-mono font-medium text-zinc-400 whitespace-nowrap mt-0.5">
                {tech.category}
              </span>
            </div>
          </div>
        ))}

        {/* Track 2 (Duplicate for Seamless Loop) */}
        {TECH_STACK.map((tech, idx) => (
          <div
            key={`t2-${idx}`}
            className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-850 transition-all shadow-md cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-black/80 border border-zinc-800 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 group-hover:border-zinc-700 transition-all">
              {tech.logo}
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="text-sm font-bold text-zinc-100 font-sans tracking-tight whitespace-nowrap leading-tight group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-xs font-mono font-medium text-zinc-400 whitespace-nowrap mt-0.5">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
