"use client";

import { useEffect, useState } from "react";

/** Compact isometric helpers (tile w=88, h=44, rise=26) */
function slab(
  cx: number,
  cy: number,
  w: number,
  d: number,
  h: number,
  top: string,
  left: string,
  right: string,
) {
  const tw = w;
  const td = d;
  const x = cx;
  const y = cy;
  return (
    <g>
      <path
        d={`M${x} ${y - td} L${x + tw} ${y} L${x} ${y + td} L${x - tw} ${y} Z`}
        fill={top}
      />
      <path
        d={`M${x - tw} ${y} L${x} ${y + td} L${x} ${y + td + h} L${x - tw} ${y + h} Z`}
        fill={left}
      />
      <path
        d={`M${x + tw} ${y} L${x} ${y + td} L${x} ${y + td + h} L${x + tw} ${y + h} Z`}
        fill={right}
      />
    </g>
  );
}

export function BimHeroVisual() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setReady(true);
      return;
    }
    const id = window.setTimeout(() => setReady(true), 30);
    return () => window.clearTimeout(id);
  }, []);

  const layer = (delay: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  // column tops on podium (isometric)
  const cols = [
    [-70, 18],
    [0, 52],
    [70, 18],
    [-35, -8],
    [35, -8],
    [-35, 44],
    [35, 44],
  ] as const;

  return (
    <svg
      viewBox="0 0 920 640"
      className="h-full w-full"
      role="img"
      aria-label="Scan-to-BIM coordinated building model with structural, architectural, and MEP systems"
    >
      <defs>
        <linearGradient id="podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8c6d4" />
          <stop offset="100%" stopColor="#8fa3b6" />
        </linearGradient>
        <linearGradient id="floorGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d82b5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2a5682" stopOpacity="0.22" />
        </linearGradient>
        <filter id="drop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1b222c" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Point cloud field (Scan to BIM) */}
      <g style={layer(40)} opacity={ready ? 0.9 : 0}>
        {[
          [120, 200], [145, 230], [100, 260], [160, 280], [130, 310],
          [180, 195], [95, 320], [170, 340], [110, 360], [155, 370],
          [780, 210], [810, 240], [760, 270], [800, 300], [830, 280],
          [770, 330], [820, 350], [790, 380], [850, 320], [740, 300],
          [200, 420], [230, 450], [700, 430], [730, 460], [250, 480],
        ].map(([x, y], i) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 2.2 : 1.5}
            fill={i % 2 === 0 ? "#2a5682" : "#1b222c"}
            opacity={0.55 + (i % 4) * 0.1}
          />
        ))}
        <path
          d="M95 250 L175 290 L155 360 L105 340 Z"
          fill="none"
          stroke="#2a5682"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.45"
        />
        <path
          d="M760 240 L840 270 L820 350 L750 320 Z"
          fill="none"
          stroke="#2a5682"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.45"
        />
      </g>

      <g filter="url(#drop)">
        {/* Ground plate */}
        <g style={layer(80)}>
          <path
            d="M200 470 L460 600 L720 470 L460 340 Z"
            fill="none"
            stroke="#5a6b7c"
            strokeWidth="1.4"
            strokeDasharray="6 7"
          />
          <path d="M260 455 L460 555 L660 455 L460 355 Z" fill="#9aadc0" opacity="0.35" />
        </g>

        {/* Podium / STR base */}
        <g style={layer(140)}>
          {slab(460, 430, 170, 85, 28, "url(#podium)", "#7d92a6", "#647a90")}
          {/* slab grid */}
          <g stroke="#e8eef4" strokeWidth="1.1" opacity="0.5">
            <path d="M340 400 L420 440" />
            <path d="M380 380 L480 430" />
            <path d="M440 370 L540 420" />
            <path d="M500 380 L580 420" />
            <path d="M360 440 L460 490" />
            <path d="M420 450 L520 500" />
            <path d="M300 430 L460 510 L620 430" fill="none" />
          </g>
        </g>

        {/* Columns */}
        <g style={layer(200)}>
          {cols.map(([dx, dy], i) => {
            const x = 460 + dx;
            const y = 400 + dy;
            return (
              <g key={i}>
                <path d={`M${x - 7} ${y} L${x} ${y + 4} L${x} ${y + 78} L${x - 7} ${y + 74} Z`} fill="#5c7389" />
                <path d={`M${x + 7} ${y} L${x} ${y + 4} L${x} ${y + 78} L${x + 7} ${y + 74} Z`} fill="#3f5468" />
                <path d={`M${x - 7} ${y} L${x} ${y - 4} L${x + 7} ${y} L${x} ${y + 4} Z`} fill="#c5d3e0" />
              </g>
            );
          })}
        </g>

        {/* Mid floor plate + beams (STR) */}
        <g style={layer(280)}>
          {slab(460, 318, 150, 75, 16, "#a8bbcd", "#6e8499", "#556b82")}
          <g stroke="#1b222c" strokeWidth="1.6" fill="none" opacity="0.55">
            <path d="M340 318 L460 378 L580 318" />
            <path d="M370 300 L460 345 L550 300" />
            <path d="M400 335 L460 365 L520 335" />
            <path d="M390 290 L390 350" />
            <path d="M460 268 L460 378" />
            <path d="M530 290 L530 350" />
          </g>
        </g>

        {/* MEP ducts / pipes between floors */}
        <g style={layer(340)}>
          {/* main duct */}
          <path d="M390 300 L460 335 L530 300" fill="none" stroke="#1f4266" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
          <path d="M390 300 L460 335 L530 300" fill="none" stroke="#7eb0e0" strokeWidth="3.5" strokeLinecap="round" />
          {/* branch pipes */}
          <path d="M420 292 L420 250" stroke="#2a5682" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M460 312 L460 248" stroke="#2a5682" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M500 292 L500 250" stroke="#2a5682" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M420 250 L500 250" stroke="#c45c3a" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <circle cx="420" cy="250" r="3.5" fill="#c45c3a" />
          <circle cx="500" cy="250" r="3.5" fill="#c45c3a" />
          <circle cx="460" cy="248" r="4" fill="#1f4266" stroke="#dce8f4" strokeWidth="1" />
        </g>

        {/* Upper ARC envelope with facade */}
        <g style={layer(400)}>
          {slab(460, 220, 130, 65, 54, "url(#floorGlass)", "#2a5682", "#1f4266")}
          {/* mullion grid on left face */}
          <g stroke="#d7e6f5" strokeWidth="1.2" opacity="0.65">
            <path d="M360 235 L360 275" />
            <path d="M385 248 L385 288" />
            <path d="M410 260 L410 300" />
            <path d="M345 255 L420 293" />
            <path d="M345 270 L420 308" />
          </g>
          {/* mullion grid on right face */}
          <g stroke="#b9d0e6" strokeWidth="1.2" opacity="0.55">
            <path d="M560 235 L560 275" />
            <path d="M535 248 L535 288" />
            <path d="M510 260 L510 300" />
            <path d="M500 293 L575 255" />
            <path d="M500 308 L575 270" />
          </g>
          {/* top roof outline */}
          <path
            d="M360 168 L460 218 L560 168 L460 118 Z"
            fill="none"
            stroke="#1b222c"
            strokeWidth="2"
          />
          <path d="M390 155 L460 190 L530 155" fill="none" stroke="#2a5682" strokeWidth="1.4" />
          <circle cx="460" cy="168" r="4" fill="#2a5682" stroke="#eef3f8" strokeWidth="1" />
        </g>
      </g>

      {/* Labels */}
      <g style={layer(520)} fontFamily="var(--font-source), ui-sans-serif, sans-serif">
        <path d="M210 255 L340 300" stroke="#1b222c" strokeWidth="1.6" fill="none" />
        <circle cx="340" cy="300" r="3.5" fill="#2a5682" />
        <rect x="95" y="228" width="118" height="34" rx="4" fill="#1b222c" />
        <text x="154" y="250" textAnchor="middle" fill="#f4f8fc" fontSize="14" fontWeight="700">
          STR
        </text>

        <path d="M710 245 L555 285" stroke="#1b222c" strokeWidth="1.6" fill="none" />
        <circle cx="555" cy="285" r="3.5" fill="#2a5682" />
        <rect x="708" y="218" width="118" height="34" rx="4" fill="#1b222c" />
        <text x="767" y="240" textAnchor="middle" fill="#f4f8fc" fontSize="14" fontWeight="700">
          MEP
        </text>

        <path d="M680 125 L530 175" stroke="#1b222c" strokeWidth="1.6" fill="none" />
        <circle cx="530" cy="175" r="3.5" fill="#2a5682" />
        <rect x="678" y="98" width="118" height="34" rx="4" fill="#1b222c" />
        <text x="737" y="120" textAnchor="middle" fill="#f4f8fc" fontSize="14" fontWeight="700">
          ARC
        </text>

        <path d="M165 360 L280 420" stroke="#1b222c" strokeWidth="1.6" fill="none" />
        <circle cx="280" cy="420" r="3.5" fill="#2a5682" />
        <rect x="70" y="330" width="118" height="34" rx="4" fill="#1b222c" />
        <text x="129" y="352" textAnchor="middle" fill="#f4f8fc" fontSize="13" fontWeight="700">
          SCAN
        </text>
      </g>
    </svg>
  );
}
