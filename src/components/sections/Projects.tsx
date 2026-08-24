"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { BentoCard, Badge } from "../ui/BentoCard";
import { PORTFOLIO_DATA, Project } from "@/constants";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

const categories = ["All", "System / Backend", "Full Stack", "AI / 3D", "Cloud / DevOps"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Engineering"
        title="Featured Projects & Systems"
        subtitle="Real-world distributed systems, performance-critical backends, and production web applications."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedCategory === cat
                ? "bg-white text-black font-semibold shadow-sm"
                : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project: Project) => (
          <BentoCard
            key={project.id}
            className="flex flex-col justify-between group hover:border-zinc-700"
          >
            <div className="space-y-4">
              {/* Category & Links */}
              <div className="flex items-center justify-between">
                <Badge variant="neutral">
                  {project.category}
                </Badge>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{project.description}</p>

              {/* Architecture Highlights */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Architecture Highlights:</span>
                </div>
                <ul className="space-y-1">
                  {project.architecture.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
                    >
                      <span className="text-zinc-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance / Metric Banner */}
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
                {project.metrics}
              </div>
            </div>

            {/* Tags footer */}
            <div className="pt-4 mt-5 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
