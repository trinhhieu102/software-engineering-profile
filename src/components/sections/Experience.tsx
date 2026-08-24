"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { BentoCard, Badge } from "../ui/BentoCard";
import { PORTFOLIO_DATA } from "@/constants";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".experience-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section id="experience" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Trajectory"
        title="Work Experience & Impact"
        subtitle="Track record of designing scalable cloud systems, leading agile engineering practices, and delivering high-value software products."
      />

      <div ref={containerRef} className="relative space-y-6 max-w-4xl mx-auto">
        {/* Continuous Timeline Vertical Line */}
        <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-zinc-800" />

        {PORTFOLIO_DATA.experiences.map((exp) => (
          <div key={exp.id} className="experience-item relative sm:pl-16">
            {/* Timeline icon node */}
            <div className="hidden sm:flex absolute left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-zinc-500 items-center justify-center z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            </div>

            <BentoCard className="group hover:border-zinc-700 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mt-0.5 font-mono">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Accomplishments */}
              <ul className="space-y-2 my-3.5">
                {exp.description.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </section>
  );
}
