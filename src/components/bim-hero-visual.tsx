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
      transform: ready ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 960 720"
      className="h-full w-full"
      role="img"
      aria-label="Abstract BIM massing model with coordinated layers"
    >
      <defs>
        <linearGradient id="plane" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5b8def" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#5b8def" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="base" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a4558" />
          <stop offset="100%" stopColor="#232a38" />
        </linearGradient>
      </defs>

      <g style={layer(100)}>
        <path
          d="M200 540 L480 650 L760 540 L480 430 Z"
          fill="none"
          stroke="#5a6578"
          strokeWidth="1.25"
          strokeDasharray="4 7"
        />
      </g>

      <g style={layer(200)}>
        <path d="M280 470 L480 550 L680 470 L480 390 Z" fill="url(#base)" />
        <path d="M280 470 L280 492 L480 572 L480 550 Z" fill="#2c3444" />
        <path d="M680 470 L680 492 L480 572 L480 550 Z" fill="#1f2633" />
      </g>

      <g style={layer(340)}>
        <path d="M310 390 L480 460 L650 390 L480 320 Z" fill="url(#plane)" stroke="#5b8def" strokeWidth="1.4" />
        <path d="M310 390 L310 418 L480 488 L480 460 Z" fill="#5b8def" opacity="0.18" />
        <path d="M650 390 L650 418 L480 488 L480 460 Z" fill="#3d6ec4" opacity="0.22" />
      </g>

      <g style={layer(480)}>
        <path d="M340 310 L480 372 L620 310 L480 248 Z" fill="url(#plane)" stroke="#5b8def" strokeWidth="1.4" />
        <path d="M340 310 L340 334 L480 396 L480 372 Z" fill="#5b8def" opacity="0.16" />
        <path d="M620 310 L620 334 L480 396 L480 372 Z" fill="#3d6ec4" opacity="0.2" />
      </g>

      <g style={layer(620)}>
        <path d="M370 250 L480 295 L590 250 L480 205 Z" fill="none" stroke="#c5ced9" strokeWidth="1.75" />
        <circle cx="480" cy="250" r="4" fill="#5b8def" />
      </g>
    </svg>
  );
}
