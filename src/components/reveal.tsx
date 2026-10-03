"use client";

import type { ReactNode } from "react";
import { cn } from "cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "ul" | "li";
};

export function Reveal({ children, className, delayMs = 0, as: Tag = "div" }: RevealProps) {
  return (
    <Tag className={cn("reveal-item", className)} style={{ animationDelay: `${delayMs}ms` }}>
      {children}
    </Tag>
  );
}
