import { Button } from "@/components/ui/button";
import { BimHeroVisual } from "@/components/bim-hero-visual";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

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

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-heading text-[1.35rem] font-semibold tracking-tight text-ink md:text-xl">Axis</span>
      <span className="mt-1 text-[0.65rem] font-medium tracking-[0.12em] text-steel uppercase">
        BIM Solutions
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a href="#top" className="transition-opacity hover:opacity-80">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-9 text-[0.95rem] text-steel md:flex" aria-label="Primary">
            <a href="#services" className="transition-colors hover:text-ink">
              Services
            </a>
            <a href="#approach" className="transition-colors hover:text-ink">
              Approach
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              Contact
            </a>
          </nav>
          <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-10 rounded-md px-4">
            Get in touch
          </Button>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative min-h-[100svh] overflow-hidden hero-atmosphere">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block"
            aria-hidden
          >
            <div className="flex h-full items-center pr-6">
              <BimHeroVisual />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-16 pt-28 md:px-8 md:pb-24">
            <div className="max-w-xl">
              <Reveal>
                <p className="font-heading text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
                  Axis
                </p>
                <p className="mt-2 text-sm font-medium tracking-[0.16em] text-signal uppercase md:text-base">
                  BIM Solutions
                </p>
              </Reveal>
              <Reveal delayMs={120}>
                <h1 className="mt-8 max-w-lg font-heading text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
                  Clarity for every model, drawing, and handoff
                </h1>
              </Reveal>
              <Reveal delayMs={220}>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
                  Model management, construction documents, and BIM process adoption for owners, design firms, and
                  contractors.
                </p>
              </Reveal>
              <Reveal delayMs={320} className="mt-9 flex flex-wrap gap-3">
                <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-11 rounded-md px-6 text-base">
                  Discuss your project
                </Button>
                <Button
                  render={<a href="#services" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-border bg-white/80 px-6 text-base"
                >
                  View services
                </Button>
              </Reveal>
            </div>

            <div className="mt-14 h-48 md:hidden" aria-hidden>
              <BimHeroVisual />
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border section-wash">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Services</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-ink md:text-4xl">
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
                  <span className="font-heading text-sm text-steel/70">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-ink md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-steel md:text-[1.05rem]">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Approach</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-ink md:text-4xl">
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
                  <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-mist">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8 md:py-28">
            <div>
              <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Contact</p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-ink md:text-4xl">
                Tell us about your project
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-steel">
                Share the building type, phase, and goals—we&apos;ll follow up with a clear plan for model management,
                documents, or firm-wide BIM rollout.
              </p>
              <div className="mt-8 space-y-2 text-sm text-steel">
                <p>
                  <a className="text-ink underline-offset-4 hover:underline" href="mailto:hello@axisbim.com">
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

      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-steel md:flex-row md:items-center md:justify-between md:px-8">
          <BrandMark />
          <p>BIM models · construction documents · process adoption</p>
          <p>© {new Date().getFullYear()} Axis BIM Solutions</p>
        </div>
      </footer>
    </div>
  );
}
