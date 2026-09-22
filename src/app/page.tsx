import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { AxisLogo } from "@/components/axis-logo";
import { BimHeroVisual } from "@/components/bim-hero-visual";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Project model management",
    text: "Keep the BIM model current across the full project lifecycle—discipline coordination, clash detection, version control, and one shared data environment.",
  },
  {
    title: "Construction documents",
    text: "Produce drawings and schedules straight from the model—consistent, checkable, and ready for review, permitting, and the field.",
  },
  {
    title: "BIM process adoption",
    text: "Embed BIM into how your firm operates: standards, roles, CDE workflows, team training, and a process you can measure.",
  },
];

const steps = [
  {
    title: "Assessment",
    text: "We map current workflows, models, and handoff gaps between design, review, and construction.",
  },
  {
    title: "Data framework",
    text: "We set model structure, LOD expectations, and a common data environment sized to your projects.",
  },
  {
    title: "Launch & support",
    text: "We run models and documents, upskill your team, and leave a working BIM practice inside the company.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
          <a href="#top" className="min-w-0 transition-opacity hover:opacity-80">
            <AxisLogo variant="lockup" />
          </a>
          <nav className="hidden items-center gap-9 text-[0.95rem] text-steel md:flex" aria-label="Primary">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#approach" className="transition-colors hover:text-foreground">
              Approach
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "h-10 shrink-0 rounded-md px-4")}
          >
            Get in touch
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero: two columns — text and visual never overlap */}
        <section className="hero-atmosphere border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24 lg:gap-16">
            <div className="max-w-xl">
              <Reveal>
                <p className="text-sm font-medium tracking-[0.16em] text-signal uppercase">
                  Axis BIM Solutions
                </p>
              </Reveal>
              <Reveal delayMs={100}>
                <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                  Clarity for every model, drawing, and handoff
                </h1>
              </Reveal>
              <Reveal delayMs={200}>
                <p className="mt-5 text-lg leading-relaxed text-steel">
                  BIM modeling, engineering, and 3D visualization for owners, design firms, and contractors—plus the
                  process work that makes delivery stick.
                </p>
              </Reveal>
              <Reveal delayMs={300} className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-md px-6 text-base")}
                >
                  Discuss your project
                </a>
                <a
                  href="#services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-md border-border bg-transparent px-6 text-base hover:bg-secondary",
                  )}
                >
                  View services
                </a>
              </Reveal>
            </div>

            <Reveal delayMs={180} className="w-full">
              <div className="visual-panel relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                <BimHeroVisual />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Brand lockup band — logo as its own section, separate from copy */}
        <section className="border-b border-border bg-mist" aria-label="Brand">
          <div className="mx-auto flex max-w-6xl justify-center px-6 py-14 md:px-8 md:py-16">
            <div className="flex max-w-md flex-col items-center gap-6">
              <Image
                src="/axis-logo.png"
                alt="Axis BIM Solutions logo"
                width={640}
                height={640}
                className="h-auto w-full max-w-sm"
                priority
              />
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Services</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              What we deliver
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              Practical BIM support where the model stays live, documents stay coordinated, and the process stays with
              your team.
            </p>

            <ul className="mt-14 space-y-0 border-t border-border">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className="grid gap-3 border-b border-border py-10 md:grid-cols-[3rem_minmax(0,0.9fr)_1.2fr] md:gap-12 md:py-12"
                >
                  <span className="font-heading text-sm text-steel/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-steel md:text-[1.05rem]">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="border-b border-border bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Approach</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              From model to working process
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              We don&apos;t sell adoption for its own sake—we align people, models, and documents so delivery is
              predictable.
            </p>

            <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t border-border pt-6">
                  <span className="text-sm font-medium text-signal">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-steel">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="bg-background">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8 md:py-28">
            <div>
              <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Contact</p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Tell us about your project
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-steel">
                Share the building type, phase, and goals—we&apos;ll follow up with a clear plan for model management,
                documents, or firm-wide BIM rollout.
              </p>
              <div className="mt-8 space-y-2 text-sm text-steel">
                <p>
                  <a className="text-foreground underline-offset-4 hover:underline" href="mailto:hello@axisbim.com">
                    hello@axisbim.com
                  </a>
                </p>
                <p>+48 22 555 01 48</p>
                <p>Warsaw, Poland · remote-friendly</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-steel md:flex-row md:items-center md:justify-between md:px-8">
          <AxisLogo variant="lockup" />
          <p>BIM Modeling, Engineering &amp; 3D Visualization</p>
          <p>© {new Date().getFullYear()} Axis BIM Solutions</p>
        </div>
      </footer>
    </div>
  );
}
