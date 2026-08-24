"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SectionHeading from "../ui/SectionHeading";
import { BentoCard } from "../ui/BentoCard";
import { PORTFOLIO_DATA } from "@/constants";
import { Server, Monitor, Database, Cloud } from "lucide-react";
import { TechShapeType } from "../canvas/TechCanvas";

// Dynamic import of 3D Tech Canvas
const TechCanvas = dynamic(() => import("../canvas/TechCanvas"), {
  ssr: false,
  loading: () => <div className="h-28 w-28 mx-auto" />,
});

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend & Distributed Systems": <Server className="w-4 h-4 text-zinc-300" />,
  "Frontend & 3D Interactive": <Monitor className="w-4 h-4 text-zinc-300" />,
  "Database & Storage": <Database className="w-4 h-4 text-zinc-300" />,
  "DevOps & Communication": <Cloud className="w-4 h-4 text-zinc-300" />,
};

const categoryShapes: Record<string, TechShapeType> = {
  "Backend & Distributed Systems": "backend",
  "Frontend & 3D Interactive": "frontend",
  "Database & Storage": "database",
  "DevOps & Communication": "cloud",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Arsenal"
        title="Skills & Technologies"
        subtitle="Languages, architectures, and cloud services utilized in high-performance production software."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PORTFOLIO_DATA.skills.map((cat, idx) => (
          <BentoCard
            key={cat.title}
            className={`flex flex-col justify-between cursor-pointer transition-all duration-300 ${
              activeCategory === idx ? "border-zinc-700 bg-zinc-900/50" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  {categoryIcons[cat.title] || <Server className="w-4 h-4 text-zinc-300" />}
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  {cat.skills.length} Techs
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-3.5 leading-tight">{cat.title}</h3>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs font-mono"
                  >
                    <span className="text-zinc-300">{skill.name}</span>
                    <span className="text-[10px] text-zinc-400 font-medium px-1.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unique 3D Architectural Model for each Tech Domain */}
            <div className="mt-5 pt-3 border-t border-zinc-800/80">
              <TechCanvas shape={categoryShapes[cat.title] || "backend"} />
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
