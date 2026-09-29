"use client";

import { useState } from "react";
import { AxisLogo } from "@/components/axis-logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#method", label: "How we work" },
  { href: "#contact", label: "Contact" },
];

export function MockupHeader({ email, phone }: { email: string; phone: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#161e38] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[11px] tracking-[0.12em] text-white/70 uppercase md:px-8">
          <span className="flex items-center gap-4">
            <a href="/" className="hover:text-white">
              Current site
            </a>
            <a href="/mockup/headers" className="hover:text-white">
              Header options
            </a>
          </span>
          <div className="flex items-center gap-4">
            <a className="hidden hover:text-white sm:inline" href={`mailto:${email}`}>
              {email}
            </a>
            <span className="hidden md:inline">{phone}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <a href="#top" className="min-w-0" onClick={() => setOpen(false)}>
          <AxisLogo tone="onDark" />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/85 lg:flex" aria-label="Mockup">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex h-10 shrink-0 items-center bg-[#4187d3] px-3 text-[10px] font-semibold tracking-[0.12em] whitespace-nowrap text-white uppercase hover:bg-[#3677c0] sm:px-4 sm:text-[11px] sm:tracking-[0.14em]"
            onClick={() => setOpen(false)}
          >
            Submit request
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="font-mono text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mockup mobile">
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
        </nav>
      ) : null}
    </header>
  );
}
