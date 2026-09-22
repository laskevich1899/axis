"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/slides/01-federated-model.png",
    title: "Federated model",
    caption: "Multidisciplinary coordination in one shared model",
    alt: "Multidisciplinary federated BIM model with coordination flows",
  },
  {
    src: "/slides/02-scan-to-bim.png",
    title: "Scan to BIM",
    caption: "Point clouds registered into as-built geometry",
    alt: "Scan to BIM workflow from point cloud capture to as-built model",
  },
  {
    src: "/slides/03-clash-detection.png",
    title: "Clash detection",
    caption: "Discipline overlays reviewed before documents freeze",
    alt: "Clash detection with discipline overlay and issue markup",
  },
  {
    src: "/slides/04-coordinated-docs.png",
    title: "Documents",
    caption: "Sheets, sections and IFC packages from the model",
    alt: "Coordinated documents output from the federated model",
  },
] as const;

const AUTO_MS = 5500;

export function BimHeroVisual() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(index + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [go, index, paused]);

  const slide = slides[index];

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative aspect-[4/3] w-full">
        {slides.map((item, i) => (
          <div
            key={item.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-out",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border bg-panel/90 text-foreground transition-colors hover:bg-panel"
        >
          <span aria-hidden className="font-mono text-sm leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border bg-panel/90 text-foreground transition-colors hover:bg-panel"
        >
          <span aria-hidden className="font-mono text-sm leading-none">
            ›
          </span>
        </button>
      </div>

      <figcaption className="flex items-center gap-3 border-t border-border bg-panel px-3 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · {slide.title}
          </p>
          <p className="truncate text-sm text-steel">{slide.caption}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5" role="tablist" aria-label="Diagram slides">
          {slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${item.title}`}
              onClick={() => go(i)}
              className={cn(
                "h-1.5 w-5 rounded-sm transition-colors",
                i === index ? "bg-signal" : "bg-border hover:bg-steel/50",
              )}
            />
          ))}
        </div>
      </figcaption>
    </div>
  );
}
