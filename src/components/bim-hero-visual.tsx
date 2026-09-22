"use client";

import { useEffect, useState } from "react";

/**
 * Refined axonometric composition — elegant linework with
 * design-domain annotations (levels, grids, LOD, section).
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

  const fade = (delay: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translateY(0)" : "translateY(10px)",
      transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 900 620"
      className="h-full w-full"
      role="img"
      aria-label="Refined BIM design diagram with levels, grids, LOD and discipline layers"
    >
      <defs>
        <linearGradient id="veil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5b8ab5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2a5682" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="plinth" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d2dbe5" />
          <stop offset="100%" stopColor="#a7b7c8" />
        </linearGradient>
        <linearGradient id="inkSoft" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c3642" />
          <stop offset="100%" stopColor="#5a6b7c" />
        </linearGradient>
        <filter id="soft" x="-12%" y="-12%" width="124%" height="124%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1b222c" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Quiet drafting field */}
      <g opacity="0.22" stroke="#6b7c8d" strokeWidth="0.8">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={`v${i}`} d={`M${160 + i * 70} 80 L${160 + i * 70} 540`} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <path key={`h${i}`} d={`M120 ${120 + i * 60} L780 ${120 + i * 60}`} />
        ))}
      </g>

      {/* Grid bubbles A–D / 1–4 */}
      <g style={fade(60)} fontFamily="var(--font-source), sans-serif" fontSize="11" fill="#3d4a5a">
        {["A", "B", "C", "D"].map((label, i) => (
          <g key={label}>
            <circle cx={250 + i * 72} cy={548} r="11" fill="#e8eef4" stroke="#7a8b9c" strokeWidth="1" />
            <text x={250 + i * 72} y={552} textAnchor="middle" fontWeight="600">
              {label}
            </text>
          </g>
        ))}
        {["1", "2", "3", "4"].map((label, i) => (
          <g key={label}>
            <circle cx={118} cy={420 - i * 58} r="11" fill="#e8eef4" stroke="#7a8b9c" strokeWidth="1" />
            <text x={118} y={424 - i * 58} textAnchor="middle" fontWeight="600">
              {label}
            </text>
          </g>
        ))}
      </g>

      <g filter="url(#soft)">
        {/* Ground diamond + section cut */}
        <g style={fade(100)}>
          <path
            d="M260 430 L450 525 L640 430 L450 335 Z"
            fill="none"
            stroke="#5a6b7c"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          {/* section cut line */}
          <path d="M300 410 L600 410" stroke="#1b222c" strokeWidth="1.4" />
          <path d="M300 410 L292 402 M300 410 L292 418" stroke="#1b222c" strokeWidth="1.2" fill="none" />
          <path d="M600 410 L608 402 M600 410 L608 418" stroke="#1b222c" strokeWidth="1.2" fill="none" />
          <text
            x="450"
            y="404"
            textAnchor="middle"
            fill="#1b222c"
            fontSize="10"
            fontFamily="var(--font-source), sans-serif"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            SECTION A–A
          </text>
        </g>

        {/* L00 plinth — delicate thickness */}
        <g style={fade(160)}>
          <path d="M300 400 L450 475 L600 400 L450 325 Z" fill="url(#plinth)" />
          <path d="M300 400 L300 414 L450 489 L450 475 Z" fill="#8fa3b6" />
          <path d="M600 400 L600 414 L450 489 L450 475 Z" fill="#73899e" />
          {/* fine floor hatch */}
          <g stroke="#eef3f7" strokeWidth="0.9" opacity="0.65">
            <path d="M340 380 L420 420" />
            <path d="M380 360 L480 410" />
            <path d="M440 350 L540 400" />
            <path d="M360 420 L460 470" />
            <path d="M420 430 L520 480" />
          </g>
        </g>

        {/* Slender columns */}
        <g style={fade(220)}>
          {(
            [
              [380, 370],
              [450, 405],
              [520, 370],
              [400, 350],
              [500, 350],
              [400, 395],
              [500, 395],
            ] as const
          ).map(([x, y], i) => (
            <g key={i} opacity="0.92">
              <path d={`M${x - 4} ${y} L${x} ${y + 2.5} L${x} ${y + 62} L${x - 4} ${y + 59.5} Z`} fill="#6d8296" />
              <path d={`M${x + 4} ${y} L${x} ${y + 2.5} L${x} ${y + 62} L${x + 4} ${y + 59.5} Z`} fill="#4f6478" />
              <path d={`M${x - 4} ${y} L${x} ${y - 2.5} L${x + 4} ${y} L${x} ${y + 2.5} Z`} fill="#d8e2ec" />
            </g>
          ))}
        </g>

        {/* L01 plate — translucent veil with room traces */}
        <g style={fade(300)}>
          <path d="M320 330 L450 395 L580 330 L450 265 Z" fill="url(#veil)" stroke="#2a5682" strokeWidth="1.3" />
          <path d="M320 330 L320 342 L450 407 L450 395 Z" fill="#2a5682" opacity="0.22" />
          <path d="M580 330 L580 342 L450 407 L450 395 Z" fill="#1f4266" opacity="0.28" />
          {/* room partitions — elegant hairlines */}
          <g stroke="#eef5fb" strokeWidth="1.1" opacity="0.7">
            <path d="M370 310 L450 350 L530 310" />
            <path d="M390 345 L450 375 L510 345" />
            <path d="M400 290 L400 350" />
            <path d="M500 290 L500 350" />
            <path d="M450 275 L450 395" />
          </g>
          {/* room tag */}
          <g fontFamily="var(--font-source), sans-serif">
            <rect x="428" y="328" width="44" height="16" rx="2" fill="#1b222c" opacity="0.82" />
            <text x="450" y="339" textAnchor="middle" fill="#f4f8fc" fontSize="9" fontWeight="600">
              R.01
            </text>
          </g>
        </g>

        {/* Delicate MEP — thin runs, not heavy ducts */}
        <g style={fade(360)} fill="none" strokeLinecap="round">
          <path d="M360 312 C400 292, 500 292, 540 312" stroke="#1f4266" strokeWidth="2.2" />
          <path d="M360 312 C400 292, 500 292, 540 312" stroke="#8eb6de" strokeWidth="1.1" />
          <path d="M400 300 L400 268" stroke="#2a5682" strokeWidth="1.6" />
          <path d="M450 308 L450 255" stroke="#2a5682" strokeWidth="1.6" />
          <path d="M500 300 L500 268" stroke="#2a5682" strokeWidth="1.6" />
          <path d="M400 268 L500 268" stroke="#b85a3c" strokeWidth="1.4" opacity="0.85" />
          <circle cx="400" cy="268" r="2.4" fill="#b85a3c" stroke="none" />
          <circle cx="500" cy="268" r="2.4" fill="#b85a3c" stroke="none" />
          <circle cx="450" cy="255" r="3" fill="#1f4266" stroke="#eef5fb" strokeWidth="0.8" />
        </g>

        {/* L02 roof contour + envelope */}
        <g style={fade(420)}>
          <path
            d="M345 250 L450 302 L555 250 L450 198 Z"
            fill="url(#veil)"
            stroke="#1f4266"
            strokeWidth="1.25"
            opacity="0.95"
          />
          <path d="M345 250 L345 262 L450 314 L450 302 Z" fill="#2a5682" opacity="0.18" />
          <path d="M555 250 L555 262 L450 314 L450 302 Z" fill="#1a3858" opacity="0.22" />
          {/* facade rhythm */}
          <g stroke="#dce8f4" strokeWidth="1" opacity="0.75">
            <path d="M370 240 L370 268" />
            <path d="M395 252 L395 280" />
            <path d="M420 264 L420 292" />
            <path d="M480 264 L480 292" />
            <path d="M505 252 L505 280" />
            <path d="M530 240 L530 268" />
          </g>
          <path
            d="M365 215 L450 257 L535 215 L450 173 Z"
            fill="none"
            stroke="url(#inkSoft)"
            strokeWidth="1.7"
          />
          <circle cx="450" cy="215" r="3.2" fill="#2a5682" stroke="#f4f8fc" strokeWidth="0.9" />
        </g>
      </g>

      {/* Level markers — vertical datum */}
      <g style={fade(480)} fontFamily="var(--font-source), sans-serif">
        <path d="M670 470 L670 200" stroke="#1b222c" strokeWidth="1.1" />
        {[
          { y: 414, label: "L00" },
          { y: 342, label: "L01" },
          { y: 262, label: "L02" },
          { y: 215, label: "RF" },
        ].map((lv) => (
          <g key={lv.label}>
            <path d={`M664 ${lv.y} L676 ${lv.y}`} stroke="#1b222c" strokeWidth="1.3" />
            <text x="686" y={lv.y + 4} fill="#1b222c" fontSize="11" fontWeight="700" letterSpacing="0.04em">
              {lv.label}
            </text>
          </g>
        ))}
      </g>

      {/* LOD chip + north + scan dust */}
      <g style={fade(540)} fontFamily="var(--font-source), sans-serif">
        <rect x="720" y="120" width="96" height="28" rx="3" fill="#1b222c" />
        <text x="768" y="138" textAnchor="middle" fill="#f4f8fc" fontSize="11" fontWeight="700" letterSpacing="0.06em">
          LOD 300
        </text>

        <g transform="translate(150 130)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#1b222c" strokeWidth="1.2" />
          <path d="M0 10 L0 -11" stroke="#1b222c" strokeWidth="1.2" />
          <path d="M-4 -5 L0 -11 L4 -5" fill="none" stroke="#1b222c" strokeWidth="1.2" />
          <text x="0" y="28" textAnchor="middle" fill="#1b222c" fontSize="10" fontWeight="700">
            N
          </text>
        </g>

        {/* Scan constellation — refined, not noisy */}
        {[
          [195, 380],
          [210, 400],
          [188, 415],
          [225, 390],
          [205, 430],
          [700, 390],
          [720, 410],
          [690, 425],
          [735, 400],
        ].map(([x, y], i) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r={i % 2 ? 1.6 : 2.1} fill="#2a5682" opacity="0.55" />
        ))}
        <text x="175" y="455" fill="#2a5682" fontSize="10" fontWeight="700" letterSpacing="0.08em">
          SCAN
        </text>
      </g>

      {/* Discipline legend — elegant inline */}
      <g style={fade(600)} fontFamily="var(--font-source), sans-serif" fontSize="10" fontWeight="600">
        <g transform="translate(200 560)">
          <rect width="10" height="10" rx="1" fill="#8fa3b6" />
          <text x="16" y="9" fill="#1b222c">
            Structure
          </text>
        </g>
        <g transform="translate(310 560)">
          <rect width="10" height="10" rx="1" fill="#4d82b5" opacity="0.7" />
          <text x="16" y="9" fill="#1b222c">
            Architecture
          </text>
        </g>
        <g transform="translate(440 560)">
          <rect width="10" height="3" y="3.5" rx="1" fill="#1f4266" />
          <text x="16" y="9" fill="#1b222c">
            MEP
          </text>
        </g>
        <g transform="translate(530 560)">
          <circle cx="5" cy="5" r="3" fill="#2a5682" />
          <text x="16" y="9" fill="#1b222c">
            Point cloud
          </text>
        </g>
      </g>
    </svg>
  );
}
