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
        <span className="text-xs font-mono text-zinc-500 mr-1">
          Quick commands:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Window Box */}
      <div
        className="rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs sm:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>alex@workstation: ~/portfolio (zsh)</span>
          </div>
          <div className="text-[10px] text-zinc-600">UTF-8</div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== "init" && (
                <div className="flex items-center gap-2 text-white font-medium">
                  <span className="text-zinc-500">alex@macbook:~$</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="text-zinc-300 whitespace-pre-line leading-relaxed text-xs sm:text-sm pl-2 border-l border-zinc-800">
                {item.output}
              </div>
            </div>
          ))}

          {/* Current Active Input Prompt */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-zinc-500 font-medium">alex@macbook:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white font-mono focus:outline-none placeholder-zinc-600 text-xs sm:text-sm"
              placeholder="type 'help' or any command..."
              aria-label="Terminal command prompt"
            />
            <button
              onClick={() => handleCommand(input)}
              className="p-1 text-zinc-500 hover:text-white"
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
