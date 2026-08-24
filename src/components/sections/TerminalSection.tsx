"use client";

import { useState, useRef, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/constants";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface CommandHistoryItem {
  command: string;
  output: string;
}

export default function TerminalSection() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "init",
      output: PORTFOLIO_DATA.terminal.welcomeMessage,
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setPastCommands((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let result =
      PORTFOLIO_DATA.terminal.commands[trimmed] ||
      `Command not found: '${trimmed}'. Type 'help' to see all available commands.`;

    if (trimmed.startsWith("cat ")) {
      const file = trimmed.replace("cat ", "").trim();
      if (file === "about.txt" || file === "about") {
        result = PORTFOLIO_DATA.terminal.commands.about;
      } else if (file === "skills.txt" || file === "skills") {
        result = PORTFOLIO_DATA.terminal.commands.skills;
      } else {
        result = `cat: ${file}: No such file or directory. Try 'cat about.txt' or 'skills'`;
      }
    }

    setHistory((prev) => [...prev, { command: trimmed, output: result }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < pastCommands.length) {
          setHistoryIndex(nextIndex);
          setInput(pastCommands[pastCommands.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(pastCommands[pastCommands.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const quickCommands = ["help", "about", "skills", "projects", "hire", "clear"];

  return (
    <section id="terminal" className="py-20 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="Dev Shell"
        title="Interactive Developer Console"
        subtitle="Interact directly with my profile via an emulated terminal shell. Type commands or click the shortcut chips below."
      />

      {/* Quick Command Suggestion Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-xs font-mono text-zinc-500 mr-1 select-none">
          Quick commands:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-3 py-1 rounded-md bg-emerald-950/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-pointer"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Window Box */}
      <div
        className="group/terminal rounded-xl border border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] transition-all duration-500 overflow-hidden font-mono text-xs sm:text-sm relative"
        onClick={() => inputRef.current?.focus()}
      >
        <style>{`
          @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .custom-terminal-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-terminal-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-terminal-scroll::-webkit-scrollbar-thumb {
            background: rgba(16, 185, 129, 0.15);
            border-radius: 2px;
          }
          .custom-terminal-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(16, 185, 129, 0.3);
          }
        `}</style>

        {/* Subtle CRT scanning line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/3 to-transparent pointer-events-none animate-[scanline_8s_linear_infinite]" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/40 border-b border-zinc-800/80 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-[0_0_5px_rgba(255,95,86,0.3)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-[0_0_5px_rgba(255,189,46,0.3)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-[0_0_5px_rgba(39,201,63,0.3)]" />
          </div>
          <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-sans text-[11.5px] text-zinc-300 font-semibold tracking-wide">alex@workstation: ~/portfolio</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/20 border border-emerald-500/10 text-[9px] font-mono text-emerald-400">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
            <span>120 FPS SHELL</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-3 custom-terminal-scroll">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== "init" && (
                <div className="flex items-center gap-2 text-white font-medium select-none">
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400 font-bold">alex</span>
                    <span className="text-zinc-500">@</span>
                    <span className="text-sky-400">macbook</span>
                    <span className="text-zinc-400 font-semibold">:~$</span>
                  </div>
                  <span className="text-emerald-300 drop-shadow-[0_0_2px_rgba(52,211,153,0.2)]">{item.command}</span>
                </div>
              )}
              <div className="text-zinc-300 whitespace-pre-line leading-relaxed text-xs sm:text-sm pl-3 border-l-2 border-emerald-500/25 hover:border-emerald-500/40 transition-colors py-0.5">
                {item.output}
              </div>
            </div>
          ))}

          {/* Current Active Input Prompt */}
          <div className="flex items-center gap-2 pt-1 border-t border-zinc-900/50 mt-4">
            <div className="flex items-center gap-1 select-none">
              <span className="text-emerald-400 font-bold">alex</span>
              <span className="text-zinc-500">@</span>
              <span className="text-sky-400">macbook</span>
              <span className="text-zinc-400 font-semibold">:~$</span>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#4ade80] font-mono focus:outline-none placeholder-zinc-700 text-xs sm:text-sm drop-shadow-[0_0_3px_rgba(74,222,128,0.2)] caret-emerald-400"
              placeholder="type 'help' or any command..."
              aria-label="Terminal command prompt"
            />
            <button
              onClick={() => handleCommand(input)}
              className="p-1 text-zinc-500 hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}
