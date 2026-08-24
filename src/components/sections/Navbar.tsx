"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/constants";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-md shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Cute Coding Cat Avatar */}
        <Link
          href="#home"
          className="flex items-center gap-2.5 group text-white font-mono font-bold text-base tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden p-0.5 group-hover:border-zinc-700 transition-colors">
            <Image
              src="/avatar.png"
              alt="Coding Cat Avatar"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span>
            {PORTFOLIO_DATA.personal.name}{" "}
            <span className="text-zinc-500 font-normal transition-all duration-300 group-hover:text-emerald-500">/</span>{" "}
            <span className="text-zinc-500 font-normal transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-sky-400 group-hover:bg-clip-text">
              software engineering
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-4 py-1 backdrop-blur-md">
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors hover:bg-zinc-800/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2">
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-1.5 text-xs font-semibold text-black bg-white rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
