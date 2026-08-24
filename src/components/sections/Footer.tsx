"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/constants";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-black pt-16 pb-12 z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer High-Impact Banner */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="group relative rounded-2xl bg-zinc-950/40 p-8 md:p-10 mb-16 border border-zinc-800/80 hover:border-emerald-500/30 transition-all duration-700 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Interactive Radial Spotlight */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.07), transparent 80%)"
            }}
          />

          {/* Faint Cyber Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Abstract Circuit Vectors on Left/Right corners */}
          <div className="absolute -left-12 -top-12 w-48 h-48 opacity-20 group-hover:opacity-35 transition-opacity duration-500 text-emerald-500/20 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{ animationDuration: '4s' }}>
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <line x1="30" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" />
              <line x1="60" y1="30" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="80" cy="50" r="2.5" fill="currentColor" />
              <circle cx="50" cy="70" r="1.5" fill="currentColor" />
              <line x1="50" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="absolute -right-16 -bottom-16 w-56 h-56 opacity-20 group-hover:opacity-35 transition-opacity duration-500 text-emerald-500/20 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{ animationDuration: '5s' }}>
              <circle cx="70" cy="70" r="2" fill="currentColor" />
              <line x1="70" y1="70" x2="40" y2="70" stroke="currentColor" strokeWidth="0.5" />
              <line x1="40" y1="70" x2="20" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="50" r="2.5" fill="currentColor" />
              <line x1="20" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="30" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="space-y-2.5 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/20 border border-emerald-500/25 text-[11px] font-mono text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Career Opportunities</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 leading-tight">
              Ready to engineer high-impact software systems?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-normal leading-relaxed">
              Always eager to contribute clean code, fast learning, and strong technical foundations to ambitious engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 z-10">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-white hover:bg-emerald-50 hover:text-emerald-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-white/5 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium text-zinc-300 bg-zinc-950/60 border border-zinc-800/80 hover:text-emerald-400 hover:border-emerald-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
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
