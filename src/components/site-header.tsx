"use client";

import { useState } from "react";
import { AxisLogo } from "@/components/axis-logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#method", label: "How we work" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader({ location }: { location?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#161e38] text-white">
      {location ? (
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-2 text-[10px] tracking-[0.08em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.12em] md:px-8">
            <span className="max-w-full text-right leading-snug break-words">{location}</span>
          </div>
        </div>
      ) : null}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 md:px-8">
        <a href="#top" className="flex min-w-0 flex-1 items-center" onClick={() => setOpen(false)}>
          <AxisLogo tone="onDark" subtitle="Models, drawings and project setup" />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/85 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          {/* Full CTA from md up — on phones it crowds the logo (esp. Android Chrome) */}
          <a
            href="#contact"
            className="hidden h-10 items-center bg-[#4187d3] px-4 text-[11px] font-semibold tracking-[0.14em] whitespace-nowrap text-white uppercase hover:bg-[#3677c0] md:inline-flex"
            onClick={() => setOpen(false)}
          >
            Submit request
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="font-mono text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-white/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex h-10 items-center bg-[#4187d3] px-4 text-[11px] font-semibold tracking-[0.14em] text-white uppercase hover:bg-[#3677c0]"
            onClick={() => setOpen(false)}
          >
            Submit request
          </a>
        </nav>
      ) : null}
    </header>
  );
}
