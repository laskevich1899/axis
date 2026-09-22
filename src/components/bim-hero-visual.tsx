"use client";

import { useEffect, useState } from "react";

/**
 * Exploded isometric BIM workflow diagram — inspired by
 * multidisciplinary federated-model process illustrations.
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

  const show = (d: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${d}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${d}ms`,
    }) as const;

  const ink = "#1e2a38";
  const blue = "#2f5f8f";
  const blueMid = "#4a7eae";
  const blueSoft = "#7aa3c9";
  const grey = "#6b7c8d";

  // isometric helpers
  const iso = (x: number, y: number, z: number) => {
    const sx = 480 + (x - y) * 0.9;
    const sy = 380 + (x + y) * 0.5 - z;
    return [sx, sy] as const;
  };

  const floorPoly = (z: number, s = 88) => {
    const [a, b] = iso(-s, -s, z);
    const [c, d] = iso(s, -s, z);
    const [e, f] = iso(s, s, z);
    const [g, h] = iso(-s, s, z);
    return `${a},${b} ${c},${d} ${e},${f} ${g},${h}`;
  };

  return (
    <svg
      viewBox="0 0 980 720"
      className="h-full w-full"
      role="img"
      aria-label="Exploded BIM workflow: scan to federated model, clash detection, and coordinated documents"
    >
      <defs>
        <linearGradient id="floorFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4e2f0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8fb0ce" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="frameFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b8ab5" />
          <stop offset="100%" stopColor="#2a5682" />
        </linearGradient>
        <pattern id="cloudNoise" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill={blue} opacity="0.55" />
          <circle cx="4.5" cy="4" r="0.9" fill={ink} opacity="0.35" />
        </pattern>
        <filter id="lift" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1b222c" floodOpacity="0.18" />
        </filter>
        <marker id="arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={blue} />
        </marker>
        <marker id="arrowInk" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={ink} />
        </marker>
      </defs>

      {/* faint field */}
      <rect width="980" height="720" fill="#c8d3df" opacity="0.25" />

      {/* —— Exploded floor plates (federated model) —— */}
      <g style={show(60)} filter="url(#lift)">
        {[0, 1, 2, 3].map((i) => {
          const z = 420 - i * 52;
          const s = 78 - i * 2;
          return (
            <g key={i}>
              <polygon
                points={floorPoly(z, s)}
                fill="url(#floorFill)"
                stroke={blue}
                strokeWidth="1.4"
              />
              {/* structural grid on plate */}
              <g stroke={blueSoft} strokeWidth="0.9" opacity="0.75" fill="none">
                <polyline
                  points={`${iso(-s * 0.5, -s, z).join(",")} ${iso(-s * 0.5, s, z).join(",")}`}
                />
                <polyline
                  points={`${iso(s * 0.5, -s, z).join(",")} ${iso(s * 0.5, s, z).join(",")}`}
                />
                <polyline
                  points={`${iso(-s, -s * 0.5, z).join(",")} ${iso(s, -s * 0.5, z).join(",")}`}
                />
                <polyline
                  points={`${iso(-s, s * 0.5, z).join(",")} ${iso(s, s * 0.5, z).join(",")}`}
                />
              </g>
              {/* columns stubs */}
              {(
                [
                  [-0.55, -0.55],
                  [0.55, -0.55],
                  [-0.55, 0.55],
                  [0.55, 0.55],
                ] as const
              ).map(([ux, uy], ci) => {
                const [cx, cy] = iso(ux * s, uy * s, z);
                return (
                  <g key={ci}>
                    <line x1={cx} y1={cy} x2={cx} y2={cy + 18} stroke={ink} strokeWidth="2.2" />
                    <circle cx={cx} cy={cy} r="2.2" fill={ink} />
                  </g>
                );
              })}
            </g>
          );
        })}
      </g>

      {/* label: Multidisciplinary Federated Model */}
      <g style={show(120)} fontFamily="var(--font-source), sans-serif">
        <path
          d="M480 185 L480 155"
          stroke={blue}
          strokeWidth="1.3"
          markerEnd="url(#arrow)"
        />
        <text
          x="480"
          y="142"
          textAnchor="middle"
          fill={ink}
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          MULTIDISCIPLINARY FEDERATED MODEL
        </text>
      </g>

      {/* —— Main building mass (lower center) —— */}
      <g style={show(160)} filter="url(#lift)">
        {/* base footprint */}
        <polygon
          points={`${iso(-95, -70, 120).join(",")} ${iso(95, -70, 120).join(",")} ${iso(95, 70, 120).join(",")} ${iso(-95, 70, 120).join(",")}`}
          fill="#9aadc0"
          stroke={ink}
          strokeWidth="1.2"
          opacity="0.55"
        />

        {/* vertical frame edges */}
        {(
          [
            [-95, -70],
            [95, -70],
            [95, 70],
            [-95, 70],
          ] as const
        ).map(([x, y], i) => {
          const [bx, by] = iso(x, y, 120);
          const [tx, ty] = iso(x, y, 280);
          return <line key={i} x1={bx} y1={by} x2={tx} y2={ty} stroke={ink} strokeWidth="2" />;
        })}

        {/* floor levels in building */}
        {[160, 200, 240, 280].map((z) => (
          <polygon
            key={z}
            points={`${iso(-95, -70, z).join(",")} ${iso(95, -70, z).join(",")} ${iso(95, 70, z).join(",")} ${iso(-95, 70, z).join(",")}`}
            fill="url(#floorFill)"
            stroke={blue}
            strokeWidth="1.15"
            opacity="0.9"
          />
        ))}

        {/* facade mullions */}
        <g stroke={blueSoft} strokeWidth="1" opacity="0.7">
          {[-50, 0, 50].map((x) => {
            const [b1x, b1y] = iso(x, -70, 120);
            const [t1x, t1y] = iso(x, -70, 280);
            const [b2x, b2y] = iso(x, 70, 120);
            const [t2x, t2y] = iso(x, 70, 280);
            return (
              <g key={x}>
                <line x1={b1x} y1={b1y} x2={t1x} y2={t1y} />
                <line x1={b2x} y1={b2y} x2={t2x} y2={t2y} />
              </g>
            );
          })}
        </g>

        {/* MEP indication inside — ducts as thin runs */}
        <g fill="none" strokeLinecap="round">
          <path
            d={`M${iso(-40, -20, 210).join(",")} L${iso(40, -20, 210).join(",")} L${iso(40, 30, 210).join(",")}`}
            stroke={blue}
            strokeWidth="3.5"
            opacity="0.85"
          />
          <path
            d={`M${iso(-40, 10, 190).join(",")} L${iso(50, 10, 190).join(",")}`}
            stroke="#b85a3c"
            strokeWidth="2.2"
            opacity="0.8"
          />
        </g>
      </g>

      {/* —— Point cloud panel (Scan) —— */}
      <g style={show(220)} filter="url(#lift)">
        <rect x="700" y="95" width="150" height="110" rx="4" fill="#dce5ee" stroke={ink} strokeWidth="1.3" />
        <rect x="708" y="103" width="134" height="78" fill="url(#cloudNoise)" opacity="0.9" />
        {/* denser cloud dots */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={720 + (i % 8) * 14 + (i % 3) * 2}
            cy={115 + Math.floor(i / 8) * 12 + (i % 2) * 3}
            r={1.3 + (i % 3) * 0.4}
            fill={i % 2 ? blue : ink}
            opacity="0.55"
          />
        ))}
        <text
          x="775"
          y="225"
          textAnchor="middle"
          fill={ink}
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.04em"
          fontFamily="var(--font-source), sans-serif"
        >
          POINT CLOUD &amp; SCAN DATA
        </text>
      </g>

      {/* Model verification inset */}
      <g style={show(280)} filter="url(#lift)">
        <rect x="720" y="250" width="130" height="95" rx="4" fill="#e8eef4" stroke={ink} strokeWidth="1.3" />
        {/* mini room perspective */}
        <path d="M740 320 L740 270 L820 270 L820 320 Z" fill="#c5d6e8" stroke={blue} strokeWidth="1.2" />
        <path d="M740 270 L780 255 L830 255 L820 270 Z" fill="#a8c0d8" stroke={blue} strokeWidth="1.1" />
        <path d="M820 270 L830 255 L830 305 L820 320 Z" fill="#8aa9c6" stroke={blue} strokeWidth="1.1" />
        <rect x="755" y="285" width="28" height="35" fill="#dfeaf4" stroke={ink} strokeWidth="1" />
        <text
          x="785"
          y="362"
          textAnchor="middle"
          fill={ink}
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.04em"
          fontFamily="var(--font-source), sans-serif"
        >
          MODEL VERIFICATION
        </text>
      </g>

      {/* Arrow: scan → verification → building */}
      <g style={show(300)}>
        <path
          d="M775 208 L775 245"
          stroke={blue}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path
          d="M720 300 L620 340"
          stroke={blue}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
          fill="none"
        />
      </g>

      {/* —— LOD 500 as-built detail (bottom left) —— */}
      <g style={show(320)} filter="url(#lift)">
        <rect x="48" y="470" width="150" height="120" rx="4" fill="#e4ebf2" stroke={ink} strokeWidth="1.3" />
        {/* equipment / rack sketch */}
        <rect x="68" y="490" width="45" height="70" fill="#b0c4d6" stroke={ink} strokeWidth="1.1" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="72" y1={500 + i * 12} x2="109" y2={500 + i * 12} stroke={blue} strokeWidth="2" />
        ))}
        <rect x="125" y="505" width="50" height="40" rx="2" fill="#9bb3c8" stroke={ink} strokeWidth="1.1" />
        <circle cx="150" cy="525" r="10" fill="none" stroke={blue} strokeWidth="1.5" />
        <path d="M145 525 L155 525 M150 520 L150 530" stroke={blue} strokeWidth="1.2" />
        <text
          x="123"
          y="608"
          textAnchor="middle"
          fill={ink}
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.04em"
          fontFamily="var(--font-source), sans-serif"
        >
          LOD 500 AS-BUILT DATA
        </text>
      </g>

      {/* Clash detection flow */}
      <g style={show(360)} fontFamily="var(--font-source), sans-serif">
        <path
          d="M200 420 C260 400, 320 380, 380 360"
          fill="none"
          stroke={blue}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <text x="230" y="398" fill={blue} fontSize="10" fontWeight="700" letterSpacing="0.05em">
          CLASH DETECTION FLOW
        </text>
        <rect x="55" y="390" width="128" height="36" rx="3" fill="#1e2a38" />
        <text x="119" y="412" textAnchor="middle" fill="#f4f8fc" fontSize="10" fontWeight="700">
          CLASH RESULTS
        </text>
        <path d="M183 408 L210 408" stroke={ink} strokeWidth="1.3" markerEnd="url(#arrowInk)" />
      </g>

      {/* Coordinated documents output */}
      <g style={show(400)} filter="url(#lift)" fontFamily="var(--font-source), sans-serif">
        <path
          d="M580 400 C640 430, 700 460, 760 490"
          fill="none"
          stroke={blue}
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <text x="640" y="448" fill={blue} fontSize="10" fontWeight="700" letterSpacing="0.05em">
          BIM COORDINATION FLOW
        </text>
        {/* document stack icon */}
        <g transform="translate(770 500)">
          <rect x="4" y="8" width="70" height="52" rx="2" fill="#c5d4e4" stroke={ink} strokeWidth="1.1" />
          <rect x="0" y="4" width="70" height="52" rx="2" fill="#d7e2ee" stroke={ink} strokeWidth="1.1" />
          <rect x="-4" y="0" width="70" height="52" rx="2" fill="#e8eef4" stroke={ink} strokeWidth="1.2" />
          <line x1="6" y1="14" x2="50" y2="14" stroke={blue} strokeWidth="1.5" />
          <line x1="6" y1="24" x2="54" y2="24" stroke={grey} strokeWidth="1.2" />
          <line x1="6" y1="32" x2="48" y2="32" stroke={grey} strokeWidth="1.2" />
          <line x1="6" y1="40" x2="52" y2="40" stroke={grey} strokeWidth="1.2" />
        </g>
        <text
          x="800"
          y="580"
          textAnchor="middle"
          fill={ink}
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          COORDINATED DOCUMENTS
        </text>
        <text x="800" y="594" textAnchor="middle" fill={grey} fontSize="9" fontWeight="600">
          OUTPUT
        </text>
      </g>

      {/* Link from as-built to building */}
      <g style={show(340)}>
        <path
          d="M198 500 C260 480, 320 450, 380 400"
          fill="none"
          stroke={ink}
          strokeWidth="1.2"
          strokeDasharray="4 5"
          markerEnd="url(#arrowInk)"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
