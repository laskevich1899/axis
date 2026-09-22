"use client";

import { useEffect, useState } from "react";

/**
 * Bold, fluid architectural massing — large curved volume that
 * reads at a glance: point cloud dissolving into a living BIM form.
 */
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

  const show = (delay: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translate3d(0,0,0) scale(1)" : "translate3d(0,18px,0) scale(0.97)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 960 700"
      className="h-full w-full"
      role="img"
      aria-label="Large-scale fluid BIM massing emerging from a point cloud scan"
    >
      <defs>
        <linearGradient id="skyWash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9eb6cc" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#c5d3e0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#d8e2ec" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bodyMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d6f9e" />
          <stop offset="45%" stopColor="#2a5682" />
          <stop offset="100%" stopColor="#1a3d5f" />
        </linearGradient>
        <linearGradient id="bodySide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4d82b0" />
          <stop offset="100%" stopColor="#163550" />
        </linearGradient>
        <linearGradient id="bodyFace" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a9bc4" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2f5f8f" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="glassBand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d7e8f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7eb0d8" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8f2fb" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8eb8de" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2a5682" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="glow" cx="55%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="depth" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#0f1720" floodOpacity="0.35" />
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Atmospheric field */}
      <rect width="960" height="700" fill="url(#skyWash)" />
      <ellipse cx="520" cy="300" rx="280" ry="200" fill="url(#glow)" />

      {/* Sweeping ground ellipse — scale cue */}
      <g style={show(40)}>
        <ellipse cx="500" cy="560" rx="310" ry="48" fill="#1b222c" opacity="0.1" />
        <ellipse
          cx="500"
          cy="555"
          rx="290"
          ry="40"
          fill="none"
          stroke="#2a5682"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          opacity="0.45"
        />
      </g>

      {/* Point cloud plume — Scan becoming form */}
      <g style={show(80)} filter="url(#softGlow)">
        {Array.from({ length: 70 }).map((_, i) => {
          const t = i / 70;
          const x = 95 + t * 220 + Math.sin(i * 1.7) * 28;
          const y = 180 + t * 280 + Math.cos(i * 2.1) * 36;
          const r = 1.2 + (i % 5) * 0.55;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill={i % 3 === 0 ? "#1b222c" : "#2a5682"}
              opacity={0.25 + t * 0.55}
            />
          );
        })}
        {/* flowing scan contour */}
        <path
          d="M110 220 C160 260, 180 320, 210 380 C240 440, 280 480, 340 510"
          fill="none"
          stroke="#2a5682"
          strokeWidth="1.4"
          strokeDasharray="2 6"
          opacity="0.5"
        />
      </g>

      {/* Main fluid massing */}
      <g filter="url(#depth)" style={show(140)}>
        {/* Core volume — smooth curved tower silhouette (isometric-ish) */}
        <path
          d="M380 520
             C320 500, 300 440, 310 360
             C320 280, 350 200, 400 150
             C430 120, 480 105, 530 115
             C590 128, 640 170, 655 240
             C670 310, 660 400, 630 470
             C610 510, 560 535, 500 540
             C450 544, 410 535, 380 520 Z"
          fill="url(#bodyMain)"
        />
        {/* Lit face — soft highlight curve */}
        <path
          d="M400 515
             C360 490, 345 430, 352 355
             C360 280, 385 210, 425 165
             C455 140, 495 128, 535 138
             C535 138, 520 200, 510 280
             C500 370, 490 450, 470 505
             C450 525, 425 525, 400 515 Z"
          fill="url(#bodyFace)"
          opacity="0.85"
        />
        {/* Shadow flank */}
        <path
          d="M535 138
             C580 150, 625 185, 640 245
             C655 310, 648 395, 622 460
             C600 505, 555 528, 500 535
             C520 480, 535 400, 542 320
             C548 250, 545 185, 535 138 Z"
          fill="url(#bodySide)"
          opacity="0.9"
        />

        {/* Horizontal floor ribbons — smooth arcs through the volume */}
        <g fill="none" strokeLinecap="round">
          {[
            { d: "M340 470 C400 490, 520 495, 610 470", w: 2.2, o: 0.55 },
            { d: "M335 410 C405 435, 525 438, 620 408", w: 2.4, o: 0.65 },
            { d: "M338 350 C410 378, 530 380, 625 348", w: 2.6, o: 0.7 },
            { d: "M350 290 C415 318, 530 320, 630 288", w: 2.8, o: 0.75 },
            { d: "M365 230 C425 258, 525 262, 625 235", w: 2.5, o: 0.7 },
            { d: "M395 175 C450 198, 520 200, 590 178", w: 2.2, o: 0.6 },
          ].map((band, i) => (
            <g key={i}>
              <path d={band.d} stroke="#0f1720" strokeWidth={band.w + 1.5} opacity="0.2" />
              <path d={band.d} stroke="url(#ribbon)" strokeWidth={band.w} opacity={band.o} />
            </g>
          ))}
        </g>

        {/* Vertical mullion rhythm — curved facade lines */}
        <g stroke="#d7e8f6" strokeWidth="1.15" fill="none" opacity="0.4">
          <path d="M370 480 C355 400, 360 300, 385 200" />
          <path d="M410 505 C400 400, 405 290, 430 175" />
          <path d="M455 520 C450 400, 455 280, 470 155" />
          <path d="M505 525 C510 400, 515 280, 520 145" />
          <path d="M555 515 C565 400, 575 290, 575 160" />
          <path d="M595 485 C610 390, 620 300, 615 200" />
        </g>

        {/* Glass band highlight near crown */}
        <path
          d="M390 200 C440 225, 520 228, 585 205
             L580 185 C520 205, 445 202, 400 180 Z"
          fill="url(#glassBand)"
        />

        {/* Crown contour — elegant peak */}
        <path
          d="M420 148 C470 125, 530 128, 575 155"
          fill="none"
          stroke="#f0f6fb"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      {/* Floating datum rings — scale / orbit */}
      <g style={show(280)} fill="none" stroke="#1b222c" strokeWidth="1.2" opacity="0.35">
        <ellipse cx="500" cy="340" rx="255" ry="78" strokeDasharray="2 8" />
        <ellipse cx="500" cy="340" rx="210" ry="58" opacity="0.7" />
      </g>

      {/* Bold callouts — sparse, high contrast */}
      <g style={show(360)} fontFamily="var(--font-source), ui-sans-serif, sans-serif">
        {/* Scan */}
        <path d="M210 360 L320 400" stroke="#1b222c" strokeWidth="1.6" />
        <circle cx="320" cy="400" r="4" fill="#2a5682" />
        <rect x="78" y="330" width="132" height="40" rx="6" fill="#1b222c" />
        <text x="144" y="349" textAnchor="middle" fill="#9ec0e0" fontSize="10" fontWeight="600" letterSpacing="0.12em">
          SCAN TO BIM
        </text>
        <text x="144" y="365" textAnchor="middle" fill="#f4f8fc" fontSize="13" fontWeight="700">
          Point cloud → model
        </text>

        {/* Federated model */}
        <path d="M720 250 L610 290" stroke="#1b222c" strokeWidth="1.6" />
        <circle cx="610" cy="290" r="4" fill="#2a5682" />
        <rect x="722" y="220" width="150" height="40" rx="6" fill="#1b222c" />
        <text x="797" y="239" textAnchor="middle" fill="#9ec0e0" fontSize="10" fontWeight="600" letterSpacing="0.12em">
          LIVE MODEL
        </text>
        <text x="797" y="255" textAnchor="middle" fill="#f4f8fc" fontSize="13" fontWeight="700">
          Coordinated massing
        </text>

        {/* Levels */}
        <path d="M700 470 L600 500" stroke="#1b222c" strokeWidth="1.6" />
        <circle cx="600" cy="500" r="4" fill="#2a5682" />
        <rect x="702" y="448" width="140" height="40" rx="6" fill="#1b222c" />
        <text x="772" y="467" textAnchor="middle" fill="#9ec0e0" fontSize="10" fontWeight="600" letterSpacing="0.12em">
          FLOOR PLATES
        </text>
        <text x="772" y="483" textAnchor="middle" fill="#f4f8fc" fontSize="13" fontWeight="700">
          Continuous levels
        </text>
      </g>
    </svg>
  );
}
