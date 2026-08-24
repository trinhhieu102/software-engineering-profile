"use client";

import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/constants";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-black pt-16 pb-12 z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer High-Impact Banner */}
        <div className="relative rounded-2xl linear-card p-8 md:p-10 mb-16 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>Career Opportunities</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready to engineer high-impact software systems?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Always eager to contribute clean code, fast learning, and strong technical foundations to ambitious engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 z-10">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-black bg-white hover:bg-zinc-200 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] text-xs font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* 4-Column Professional Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden p-0.5">
                <Image
                  src="/avatar.png"
                  alt="Coding Cat Avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-mono font-bold text-white text-base tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-normal">
              Software Engineer (born 2006) specialized in modern web applications, distributed architectures, and interactive 3D WebGL interfaces. Certified English Level B2 (CEFR).
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              {PORTFOLIO_DATA.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tech Focus (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200">
              Core Tech
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>Next.js 15 & React 19</li>
              <li>TypeScript & Node.js</li>
              <li>Go & Microservices</li>
              <li>Three.js & GSAP</li>
              <li>PostgreSQL & Redis</li>
              <li>Docker & CI/CD</li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200">
              Connect
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              <p className="text-zinc-300">{PORTFOLIO_DATA.personal.email}</p>
              <p>{PORTFOLIO_DATA.personal.location}</p>
              <div className="flex gap-2.5 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom System Operational Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All systems operational • Built with Next.js, Three.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
