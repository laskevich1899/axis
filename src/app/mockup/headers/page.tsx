import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AxisLogo } from "@/components/axis-logo";

export const metadata: Metadata = {
  title: "Header options · Axis BIM Solutions",
  robots: { index: false, follow: false },
};

const links = ["Services", "Sectors", "How we work", "Contact"];

function Bar({
  children,
  utility,
}: {
  children: ReactNode;
  utility?: ReactNode;
}) {
  return (
    <header className="bg-[#161e38] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[11px] tracking-[0.12em] text-white/70 uppercase md:px-8">
          <span>Current site</span>
          <div className="flex items-center gap-4">{utility}</div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        {children}
        <nav className="hidden items-center gap-7 text-sm text-white/85 lg:flex" aria-hidden>
          {links.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </nav>
        <span className="inline-flex h-10 shrink-0 items-center bg-[#4187d3] px-4 text-[11px] font-semibold tracking-[0.14em] whitespace-nowrap uppercase">
          Submit request
        </span>
      </div>
    </header>
  );
}

const options = [
  {
    id: "name",
    title: "1. Only the name",
    text: "The mark and Axis BIM Solutions. Nothing abbreviated underneath.",
    bar: (
      <Bar utility={<span>contact@axisbimsolutions.com</span>}>
        <AxisLogo tone="onDark" subtitle={false} />
      </Bar>
    ),
  },
  {
    id: "words",
    title: "2. Full words",
    text: "The same gold line, written out: Modeling · Engineering · Visualization.",
    bar: (
      <Bar utility={<span>contact@axisbimsolutions.com</span>}>
        <AxisLogo tone="onDark" subtitle="Modeling · Engineering · Visualization" />
      </Bar>
    ),
  },
  {
    id: "phrase",
    title: "3. A short phrase",
    text: "One readable line instead of a list of trades.",
    bar: (
      <Bar utility={<span>contact@axisbimsolutions.com</span>}>
        <AxisLogo
          tone="onDark"
          subtitle="Models, drawings and project setup"
          subtitleClassName="font-sans text-[0.78rem] tracking-normal normal-case text-white/70"
        />
      </Bar>
    ),
  },
  {
    id: "moved",
    title: "4. Phrase in the top bar",
    text: "The logo stays as the name only. The full line sits above, next to the email.",
    bar: (
      <Bar
        utility={
          <>
            <span className="hidden tracking-normal normal-case sm:inline">
              BIM modeling · Engineering · 3D visualization
            </span>
            <span>contact@axisbimsolutions.com</span>
          </>
        }
      >
        <AxisLogo tone="onDark" subtitle={false} />
      </Bar>
    ),
  },
];

export default function HeaderOptionsPage() {
  return (
    <div className="min-h-full bg-[#e7e9f2] text-[#161e38]">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <p className="text-[11px] tracking-[0.16em] text-[#4187d3] uppercase">Design study</p>
        <h1 className="mt-2 font-heading text-3xl font-medium tracking-tight">Header options</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3c4658]">
          Four ways to replace Modeling · Eng · Viz. The rest of the mockup is unchanged.
        </p>
        <a href="/mockup" className="mt-3 inline-block text-sm text-[#4187d3] hover:underline">
          Back to the mockup
        </a>
      </div>
      <div className="space-y-10 pb-16">
        {options.map((option) => (
          <section key={option.id} id={option.id}>
            <div className="mx-auto mb-3 max-w-6xl px-4 md:px-8">
              <h2 className="font-heading text-xl font-medium">{option.title}</h2>
              <p className="mt-1 text-sm text-[#3c4658]">{option.text}</p>
            </div>
            {option.bar}
          </section>
        ))}
      </div>
    </div>
  );
}
