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
      transform: ready ? "translateY(0)" : "translateY(14px)",
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  return (
    <svg
      viewBox="0 0 960 720"
      className="h-full w-full"
      role="img"
      aria-label="Federated BIM model with structural, architectural, and MEP layers"
    >
      <defs>
        <linearGradient id="slabTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8d4e0" />
          <stop offset="100%" stopColor="#9aadc0" />
        </linearGradient>
        <linearGradient id="glassA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d74a8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2f5f8f" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="glassB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a86bc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2f5f8f" stopOpacity="0.14" />
        </linearGradient>
        <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1b222c" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* subtle ground grid */}
      <g opacity="0.35" stroke="#6b7788" strokeWidth="1">
        <path d="M140 560 L480 690 L820 560 L480 430 Z" fill="none" strokeDasharray="5 8" />
        <path d="M260 505 L480 590 L700 505" fill="none" opacity="0.5" />
        <path d="M340 475 L480 530 L620 475" fill="none" opacity="0.35" />
      </g>

      <g filter="url(#softShadow)">
        {/* foundation / podium */}
        <g style={layer(100)}>
          <path d="M250 485 L480 575 L710 485 L480 395 Z" fill="url(#slabTop)" />
          <path d="M250 485 L250 512 L480 602 L480 575 Z" fill="#8496a9" />
          <path d="M710 485 L710 512 L480 602 L480 575 Z" fill="#6a7f94" />
          {/* grid lines on slab */}
          <path d="M310 460 L420 505" stroke="#eef3f7" strokeWidth="1.2" opacity="0.55" />
          <path d="M380 435 L520 490" stroke="#eef3f7" strokeWidth="1.2" opacity="0.4" />
          <path d="M460 445 L600 500" stroke="#eef3f7" strokeWidth="1.2" opacity="0.35" />
          <path d="M540 430 L650 475" stroke="#eef3f7" strokeWidth="1.2" opacity="0.3" />
        </g>

        {/* ARC / envelope floor */}
        <g style={layer(220)}>
          <path d="M285 400 L480 478 L675 400 L480 322 Z" fill="url(#glassA)" stroke="#234a70" strokeWidth="1.6" />
          <path d="M285 400 L285 428 L480 506 L480 478 Z" fill="#2f5f8f" opacity="0.32" />
          <path d="M675 400 L675 428 L480 506 L480 478 Z" fill="#1f4266" opacity="0.38" />
          {/* facade mullions */}
          <path d="M340 378 L430 415" stroke="#dce8f4" strokeWidth="1.3" opacity="0.55" />
          <path d="M390 358 L500 402" stroke="#dce8f4" strokeWidth="1.3" opacity="0.45" />
          <path d="M460 368 L570 412" stroke="#dce8f4" strokeWidth="1.3" opacity="0.4" />
          <path d="M530 355 L620 390" stroke="#dce8f4" strokeWidth="1.3" opacity="0.35" />
          <path d="M320 410 L450 462" stroke="#dce8f4" strokeWidth="1" opacity="0.3" />
        </g>

        {/* STR frame floor */}
        <g style={layer(340)}>
          <path d="M310 318 L480 388 L650 318 L480 248 Z" fill="url(#glassB)" stroke="#1f4266" strokeWidth="1.6" />
          <path d="M310 318 L310 344 L480 414 L480 388 Z" fill="#2f5f8f" opacity="0.28" />
          <path d="M650 318 L650 344 L480 414 L480 388 Z" fill="#1a3858" opacity="0.34" />
          {/* structural grid */}
          <path d="M360 300 L480 348 L600 300" fill="none" stroke="#e8f0f8" strokeWidth="1.4" opacity="0.55" />
          <path d="M395 278 L480 312 L565 278" fill="none" stroke="#e8f0f8" strokeWidth="1.2" opacity="0.4" />
          <path d="M420 330 L480 354 L540 330" fill="none" stroke="#e8f0f8" strokeWidth="1.2" opacity="0.35" />
          <circle cx="360" cy="300" r="2.5" fill="#f4f8fc" />
          <circle cx="480" cy="348" r="2.5" fill="#f4f8fc" />
          <circle cx="600" cy="300" r="2.5" fill="#f4f8fc" />
        </g>

        {/* MEP / systems contour */}
        <g style={layer(460)}>
          <path
            d="M345 250 L480 305 L615 250 L480 195 Z"
            fill="none"
            stroke="#1b222c"
            strokeWidth="2.2"
          />
          <path d="M380 235 L480 275 L580 235" fill="none" stroke="#2f5f8f" strokeWidth="1.5" opacity="0.8" />
          <path d="M410 255 L480 282 L550 255" fill="none" stroke="#2f5f8f" strokeWidth="1.2" opacity="0.55" />
          <circle cx="480" cy="250" r="5" fill="#2f5f8f" stroke="#f4f8fc" strokeWidth="1.5" />
          <circle cx="410" cy="255" r="2.5" fill="#1b222c" />
          <circle cx="550" cy="255" r="2.5" fill="#1b222c" />
        </g>
      </g>

      {/* Readable callout labels with solid chips */}
      <g style={layer(580)} fontFamily="var(--font-source), ui-sans-serif, sans-serif">
        {/* STR */}
        <path d="M218 292 L345 340" stroke="#1b222c" strokeWidth="1.5" fill="none" />
        <circle cx="345" cy="340" r="3.5" fill="#2f5f8f" />
        <rect x="108" y="262" width="112" height="36" rx="4" fill="#1b222c" />
        <text x="164" y="285" textAnchor="middle" fill="#f4f8fc" fontSize="15" fontWeight="700">
          STR
        </text>

        {/* MEP */}
        <path d="M742 278 L610 335" stroke="#1b222c" strokeWidth="1.5" fill="none" />
        <circle cx="610" cy="335" r="3.5" fill="#2f5f8f" />
        <rect x="740" y="248" width="112" height="36" rx="4" fill="#1b222c" />
        <text x="796" y="271" textAnchor="middle" fill="#f4f8fc" fontSize="15" fontWeight="700">
          MEP
        </text>

        {/* ARC */}
        <path d="M700 168 L560 240" stroke="#1b222c" strokeWidth="1.5" fill="none" />
        <circle cx="560" cy="240" r="3.5" fill="#2f5f8f" />
        <rect x="688" y="138" width="112" height="36" rx="4" fill="#1b222c" />
        <text x="744" y="161" textAnchor="middle" fill="#f4f8fc" fontSize="15" fontWeight="700">
          ARC
        </text>
      </g>
    </svg>
  );
}
