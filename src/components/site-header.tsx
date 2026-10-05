"use client";

import { useState } from "react";
import { AxisLogo } from "@/components/axis-logo";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";

type NavLink = { href: string; label: string };

export function SiteHeader({
  location,
  locale,
  logoSubtitle,
  links,
  cta,
  menuOpenLabel,
  menuCloseLabel,
  languageLabel,
}: {
  location?: string;
  locale: Locale;
  logoSubtitle: string;
  links: NavLink[];
  cta: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#161e38] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 md:px-8">
          <nav aria-label={languageLabel} className="flex shrink-0 items-center gap-2.5 text-[11px] font-semibold tracking-[0.12em]">
            {LOCALES.map((code) => {
              const active = code === locale;
              return (
                <a
                  key={code}
                  href={localePath(code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={active ? "true" : undefined}
                  className={active ? "text-white underline decoration-[#c2b08a] decoration-2 underline-offset-4" : "text-white/55 hover:text-white"}
                >
                  {code.toUpperCase()}
                </a>
              );
            })}
          </nav>
          {location ? (
            <span className="min-w-0 text-right text-[10px] leading-snug tracking-[0.08em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.12em]">
              {location}
            </span>
          ) : null}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 md:px-8">
        <a href="#top" className="flex min-w-0 flex-1 items-center" onClick={() => setOpen(false)}>
          <AxisLogo tone="onDark" subtitle={logoSubtitle} />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/85 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center bg-[#4187d3] px-4 text-[11px] font-semibold tracking-[0.08em] whitespace-nowrap text-white uppercase hover:bg-[#3677c0] md:inline-flex"
            onClick={() => setOpen(false)}
          >
            {cta}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? menuCloseLabel : menuOpenLabel}
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
            className="mt-2 inline-flex h-10 items-center bg-[#4187d3] px-4 text-[11px] font-semibold tracking-[0.08em] text-white uppercase hover:bg-[#3677c0]"
            onClick={() => setOpen(false)}
          >
            {cta}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
