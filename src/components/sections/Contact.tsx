"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { BentoCard } from "../ui/BentoCard";
import { PORTFOLIO_DATA } from "@/constants";
import { Mail, MapPin, Send, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#a1a1aa", "#52525b"],
      });
      setFormState({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Connection"
        title="Get In Touch"
        subtitle="Interested in building something extraordinary or exploring new engineering opportunities? Drop a message or reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Direct Info & Socials */}
        <div className="lg:col-span-5 space-y-5">
          <BentoCard className="space-y-5">
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5">Direct Channels</h3>
              <p className="text-xs text-zinc-400">
                Fastest response within 24 hours for engineering roles or technical consulting.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Copy Box */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-400">Email Address</p>
                    <p className="text-xs sm:text-sm font-mono text-white font-medium">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email)}
                  className="p-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400">Base Location</p>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Network Badges */}
            <div className="pt-5 border-t border-zinc-800/80">
              <p className="text-xs font-mono text-zinc-400 mb-2.5">Profiles</p>
              <div className="flex gap-2.5">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-2 text-xs font-mono"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-2 text-xs font-mono"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <BentoCard>
            <h3 className="text-lg font-bold text-white mb-1.5">Send a Message</h3>
            <p className="text-xs text-zinc-400 mb-5">
              Fill in the details below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center space-y-3 animate-in fade-in-50">
                <div className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-200 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Message Transmitted</h4>
                <p className="text-xs text-zinc-400">
                  Thank you for reaching out. I have received your message and will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono text-zinc-300 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">Message Payload</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your engineering role, project, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-xs"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </BentoCard>
        </div>

      </div>
    </section>
  );
}
