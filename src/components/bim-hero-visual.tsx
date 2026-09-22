"use client";

import { useEffect, useState } from "react";

export function BimHeroVisual() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setReady(true);
      return;
    }
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  const layer = (delay: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 960 720"
      className="h-full w-full"
      role="img"
      aria-label="Coordinated BIM discipline layers"
    >
      <defs>
        <linearGradient id="plane" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f5f8f" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2f5f8f" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="base" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d5dde6" />
          <stop offset="100%" stopColor="#b4c0cd" />
        </linearGradient>
      </defs>

      <g style={layer(80)}>
        <path
          d="M200 540 L480 650 L760 540 L480 430 Z"
          fill="none"
          stroke="#8a95a3"
          strokeWidth="1.25"
          strokeDasharray="4 7"
        />
      </g>

      <g style={layer(160)}>
        <path d="M280 470 L480 550 L680 470 L480 390 Z" fill="url(#base)" />
        <path d="M280 470 L280 492 L480 572 L480 550 Z" fill="#9aabbc" />
        <path d="M680 470 L680 492 L480 572 L480 550 Z" fill="#7f93a6" />
      </g>

      <g style={layer(280)}>
        <path d="M310 390 L480 460 L650 390 L480 320 Z" fill="url(#plane)" stroke="#2f5f8f" strokeWidth="1.4" />
        <path d="M310 390 L310 418 L480 488 L480 460 Z" fill="#2f5f8f" opacity="0.16" />
        <path d="M650 390 L650 418 L480 488 L480 460 Z" fill="#234a70" opacity="0.2" />
      </g>

      <g style={layer(400)}>
        <path d="M340 310 L480 372 L620 310 L480 248 Z" fill="url(#plane)" stroke="#2f5f8f" strokeWidth="1.4" />
        <path d="M340 310 L340 334 L480 396 L480 372 Z" fill="#2f5f8f" opacity="0.14" />
        <path d="M620 310 L620 334 L480 396 L480 372 Z" fill="#234a70" opacity="0.18" />
      </g>

      <g style={layer(520)}>
        <path d="M370 250 L480 295 L590 250 L480 205 Z" fill="none" stroke="#1b222c" strokeWidth="1.6" />
        <circle cx="480" cy="250" r="3.5" fill="#2f5f8f" />
      </g>

      <g style={layer(640)} fill="#5a6573" fontSize="13" fontFamily="var(--font-source), sans-serif">
        <circle cx="210" cy="300" r="3.2" fill="#2f5f8f" />
        <circle cx="760" cy="290" r="3.2" fill="#2f5f8f" />
        <circle cx="700" cy="180" r="2.8" fill="#1b222c" />
        <path d="M214 304 L320 360" stroke="#2f5f8f" strokeWidth="1" opacity="0.5" fill="none" />
        <path d="M756 294 L640 340" stroke="#2f5f8f" strokeWidth="1" opacity="0.5" fill="none" />
        <path d="M700 184 L590 240" stroke="#1b222c" strokeWidth="1" opacity="0.4" fill="none" />
        <text x="168" y="286">
          STR
        </text>
        <text x="772" y="278">
          MEP
        </text>
        <text x="708" y="168">
          ARC
        </text>
      </g>
    </svg>
  );
}
