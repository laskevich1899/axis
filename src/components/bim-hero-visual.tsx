"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { SlideItem } from "@/lib/site-content";

const AUTO_MS = 5500;

type Props = {
  slides: SlideItem[];
};

export function BimHeroVisual({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;

  const go = useCallback(
    (next: number) => {
      if (!count) return;
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    setIndex((current) => (count ? Math.min(current, count - 1) : 0));
  }, [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => go(index + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [go, index, paused, count]);

  if (!count) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-panel text-sm text-steel">
        No slides configured.
      </div>
    );
  }

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
            key={`${item.id}-${item.src}`}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-out",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={item.src}
              alt={item.alt || item.title}
              fill
              className="object-cover object-center"
              priority={i === 0}
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}

        {count > 1 && (
          <>
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
          </>
        )}
      </div>

      <figcaption className="flex flex-col gap-2 border-t border-border bg-panel px-3 py-2.5 sm:flex-row sm:items-center sm:gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · {slide.title}
          </p>
          <p className="text-sm leading-snug text-steel sm:truncate">{slide.caption}</p>
        </div>
        {count > 1 && (
          <div className="relative z-10 flex shrink-0 items-center gap-1" role="tablist" aria-label="Diagram slides">
            {slides.map((item, i) => (
              <button
                key={`${item.id}-dot`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${item.title}`}
                onClick={() => setIndex(i)}
                className="group flex h-8 items-center justify-center px-1"
              >
                <span
                  className={cn(
                    "block h-1.5 w-5 rounded-sm transition-colors",
                    i === index ? "bg-signal" : "bg-border group-hover:bg-steel/50",
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </figcaption>
    </div>
  );
}
