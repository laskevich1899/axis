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
      transform: ready ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
      transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 960 720"
      className="h-full w-full"
      role="img"
      aria-label="Isometric BIM building model with digital layers"
    >
      <defs>
        <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f7a6d" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#145a51" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="slab" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d7e3ea" />
          <stop offset="100%" stopColor="#b7c7d2" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#1a2332" floodOpacity="0.18" />
        </filter>
      </defs>

      <g style={{ ...layer(80), opacity: ready ? 0.55 : 0 }}>
        <ellipse cx="480" cy="620" rx="320" ry="48" fill="#1a2332" opacity="0.08" />
        <path
          d="M160 560 L480 680 L800 560 L480 440 Z"
          fill="none"
          stroke="#5a6b7a"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </g>

      <g filter="url(#soft)">
        <g style={layer(180)}>
          <path d="M260 470 L480 555 L700 470 L480 385 Z" fill="url(#slab)" />
          <path d="M260 470 L260 500 L480 585 L480 555 Z" fill="#9aafbd" />
          <path d="M700 470 L700 500 L480 585 L480 555 Z" fill="#7f96a6" />
        </g>

        <g style={layer(320)}>
          <path
            d="M290 390 L480 465 L670 390 L480 315 Z"
            fill="url(#glass)"
            stroke="#1f7a6d"
            strokeWidth="1.5"
          />
          <path d="M290 390 L290 430 L480 505 L480 465 Z" fill="#1f7a6d" opacity="0.28" />
          <path d="M670 390 L670 430 L480 505 L480 465 Z" fill="#145a51" opacity="0.35" />
          <path d="M320 405 L450 455" stroke="#f4faf8" strokeWidth="1.2" opacity="0.45" />
          <path d="M510 430 L640 380" stroke="#f4faf8" strokeWidth="1.2" opacity="0.35" />
        </g>

        <g style={layer(460)}>
          <path
            d="M310 310 L480 380 L650 310 L480 240 Z"
            fill="url(#glass)"
            stroke="#1f7a6d"
            strokeWidth="1.5"
          />
          <path d="M310 310 L310 345 L480 415 L480 380 Z" fill="#1f7a6d" opacity="0.25" />
          <path d="M650 310 L650 345 L480 415 L480 380 Z" fill="#145a51" opacity="0.32" />
        </g>

        <g style={layer(600)}>
          <path
            d="M340 250 L480 305 L620 250 L480 195 Z"
            fill="none"
            stroke="#b08d57"
            strokeWidth="2.5"
          />
          <path
            d="M340 250 L480 195 L620 250"
            fill="none"
            stroke="#1a2332"
            strokeWidth="1.25"
            opacity="0.55"
          />
          <circle cx="480" cy="250" r="5" fill="#b08d57" />
        </g>
      </g>

      <g style={layer(760)}>
        <circle cx="220" cy="300" r="4" fill="#1f7a6d" />
        <circle cx="760" cy="280" r="4" fill="#b08d57" />
        <circle cx="700" cy="180" r="3.5" fill="#1f7a6d" />
        <path d="M224 304 L330 360" stroke="#1f7a6d" strokeWidth="1" opacity="0.5" />
        <path d="M756 284 L640 330" stroke="#b08d57" strokeWidth="1" opacity="0.55" />
        <path d="M700 184 L580 240" stroke="#1f7a6d" strokeWidth="1" opacity="0.45" />
        <text x="180" y="280" fill="#5a6b7a" fontSize="14" fontFamily="var(--font-manrope), sans-serif">
          LOD 300
        </text>
        <text x="772" y="268" fill="#5a6b7a" fontSize="14" fontFamily="var(--font-manrope), sans-serif">
          IFC
        </text>
        <text x="710" y="168" fill="#5a6b7a" fontSize="14" fontFamily="var(--font-manrope), sans-serif">
          CDE
        </text>
      </g>
    </svg>
  );
}
