"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { AxisLogo } from "@/components/axis-logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#method", label: "Method" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-panel/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 md:px-8 md:py-3">
        <a href="#top" className="min-w-0 transition-opacity hover:opacity-80" onClick={() => setOpen(false)}>
          <AxisLogo variant="lockup" />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-steel md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "h-9 rounded px-3 text-sm")} onClick={() => setOpen(false)}>
            <span className="sm:hidden">Brief</span>
            <span className="hidden sm:inline">Request brief</span>
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden className="font-mono text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-border bg-panel px-4 py-2 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block border-b border-border py-3 text-sm text-foreground last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
