import { cn } from "@/lib/utils";

type AxisLogoProps = {
  className?: string;
  variant?: "mark" | "lockup" | "stacked";
};

export function AxisLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 140"
      className={cn("h-auto w-full text-[#2f5f8f]", className)}
      role="img"
      aria-label="Axis BIM Solutions monogram ABS"
    >
      <defs>
        <linearGradient id="absStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4a5c" />
          <stop offset="100%" stopColor="#5a6573" />
        </linearGradient>
      </defs>

      <g stroke="url(#absStroke)" strokeWidth="1.6" fill="none" strokeLinejoin="round">
        <path d="M28 118 L70 22 L112 118" />
        <path d="M46 78 L94 78" />
        <path d="M70 22 L70 118" opacity="0.45" />
        <path d="M40 98 L100 98" opacity="0.35" />
        <path d="M52 55 L88 55" opacity="0.4" />
        <path d="M58 40 L70 22 L82 40" opacity="0.5" />
      </g>
      <g fill="currentColor">
        <circle cx="70" cy="22" r="2.4" />
        <circle cx="28" cy="118" r="2" />
        <circle cx="112" cy="118" r="2" />
        <circle cx="46" cy="78" r="1.8" />
        <circle cx="94" cy="78" r="1.8" />
      </g>

      <g stroke="url(#absStroke)" strokeWidth="1.6" fill="none" strokeLinejoin="round">
        <path d="M142 22 L142 118" />
        <path d="M142 22 L188 22 Q218 22 218 48 Q218 70 188 70 L142 70" />
        <path d="M142 70 L194 70 Q226 70 226 96 Q226 118 194 118 L142 118" />
        <path d="M142 46 L200 46" opacity="0.35" />
        <path d="M142 94 L206 94" opacity="0.35" />
        <path d="M168 22 L168 118" opacity="0.4" />
      </g>
      <g fill="currentColor">
        <circle cx="142" cy="22" r="2.2" />
        <circle cx="142" cy="70" r="2.2" />
        <circle cx="142" cy="118" r="2.2" />
        <circle cx="218" cy="48" r="2" />
        <circle cx="226" cy="96" r="2" />
      </g>

      <g stroke="url(#absStroke)" strokeWidth="1.6" fill="none" strokeLinejoin="round">
        <path d="M320 40 Q320 22 292 22 L268 22 Q244 22 244 46 Q244 66 268 70 L300 76 Q324 80 324 100 Q324 118 296 118 L268 118 Q244 118 244 100" />
        <path d="M256 40 L304 40" opacity="0.35" />
        <path d="M260 100 L308 100" opacity="0.35" />
        <path d="M268 70 L300 76" opacity="0.45" />
      </g>
      <g fill="currentColor">
        <circle cx="292" cy="22" r="2" />
        <circle cx="244" cy="46" r="2" />
        <circle cx="284" cy="73" r="2" />
        <circle cx="324" cy="100" r="2" />
        <circle cx="268" cy="118" r="2" />
      </g>
    </svg>
  );
}

export function AxisLogo({ className, variant = "lockup" }: AxisLogoProps) {
  if (variant === "mark") {
    return <AxisLogoMark className={cn("w-28", className)} />;
  }

  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-start", className)}>
        <AxisLogoMark className="w-44 max-w-full" />
        <p className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground">
          Axis BIM Solutions
        </p>
        <p className="mt-1 text-sm text-steel">BIM modeling · engineering · 3D visualization</p>
      </div>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AxisLogoMark className="w-11 shrink-0 sm:w-[4.25rem]" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
          Axis BIM Solutions
        </span>
        <span className="mt-1 hidden font-mono text-[0.62rem] tracking-wide text-steel uppercase sm:block">
          Modeling · Eng · Viz
        </span>
      </span>
    </span>
  );
}
