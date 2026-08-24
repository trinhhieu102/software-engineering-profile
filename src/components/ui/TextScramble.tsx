"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  duration?: number;
}

const CHARACTERS = "ABCDEF0123456789!@#$%^&*<>[]{}=";

export default function TextScramble({
  text,
  className,
  triggerOnHover = true,
  duration = 800,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const isScramblingRef = useRef<boolean>(false);

  const scramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const startTime = performance.now();
    const length = text.length;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Number of characters resolved
      const resolvedCount = Math.floor(progress * length);

      let result = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < resolvedCount) {
          result += text[i];
        } else {
          result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    };

    requestAnimationFrame(update);
  }, [text, duration]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  return (
    <span
      className={`inline-block cursor-default select-none ${className || ""}`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
