import { Button } from "@/components/ui/button";
import { BimHeroVisual } from "@/components/bim-hero-visual";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const services = [
  {
    number: "01",
    title: "Project model management",
    text: "Keep the BIM model current across the full project lifecycle—discipline coordination, clash detection, version control, and one shared data environment.",
  },
  {
    number: "02",
    title: "Construction documents",
    text: "Produce drawings and schedules straight from the model—consistent, checkable, and ready for review, permitting, and the field.",
  },
  {
    number: "03",
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
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a href="#top" className="font-heading text-lg tracking-[0.18em] text-ink md:text-xl">
            KONTUR
          </a>
          <nav className="hidden items-center gap-8 text-sm text-steel md:flex" aria-label="Primary">
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
          <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-10 px-4">
            Get in touch
          </Button>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative min-h-[100svh] overflow-hidden hero-atmosphere">
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 top-[18%] h-[42%] opacity-50 md:inset-y-0 md:left-auto md:right-0 md:top-0 md:h-full md:w-[62%] md:opacity-95"
            aria-hidden
          >
            <div className="h-full w-full md:translate-y-0">
              <BimHeroVisual />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-14 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
            <div className="max-w-xl">
              <Reveal>
                <p className="font-heading text-4xl leading-none tracking-[0.14em] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                  KONTUR
                </p>
              </Reveal>
              <Reveal delayMs={120}>
                <h1 className="mt-6 max-w-lg font-heading text-2xl leading-tight text-ink sm:text-3xl md:text-4xl">
                  The digital contour of your buildings
                </h1>
              </Reveal>
              <Reveal delayMs={220}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-steel md:text-lg">
                  BIM model management, construction documents, and process rollout for U.S. owners, architects, and
                  contractors.
                </p>
              </Reveal>
              <Reveal delayMs={320} className="mt-8 flex flex-wrap gap-3">
                <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-11 px-6 text-base">
                  Discuss your project
                </Button>
                <Button
                  render={<a href="#services" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="h-11 border-steel/40 bg-white/70 px-6 text-base backdrop-blur-sm"
                >
                  View services
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border bg-[#f7f9fb]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="font-heading text-sm tracking-[0.2em] text-teal uppercase">Services</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl text-ink md:text-4xl">
              Three pillars of BIM delivery
            </h2>
            <p className="mt-4 max-w-xl text-steel">
              Built for teams that need a live model, coordinated documents, and a process that sticks inside the
              organization.
            </p>

            <ul className="mt-14 divide-y divide-border border-y border-border">
              {services.map((service) => (
                <li
                  key={service.number}
                  className="grid gap-4 py-10 transition-colors hover:bg-teal/[0.03] md:grid-cols-[5rem_1fr_1.2fr] md:gap-10 md:py-12"
                >
                  <span className="font-heading text-sm tracking-[0.18em] text-brass">{service.number}</span>
                  <h3 className="font-heading text-xl text-ink md:text-2xl">{service.title}</h3>
                  <p className="text-base leading-relaxed text-steel">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="relative overflow-hidden border-t border-border bg-ink text-[#e8eef3]">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="font-heading text-sm tracking-[0.2em] text-brass uppercase">Approach</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl md:text-4xl">From model to working process</h2>
            <p className="mt-4 max-w-xl text-[#a8b6c4]">
              We don&apos;t sell adoption for its own sake—we build a contour where the model, the people, and the
              documents speak the same language.
            </p>

            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="font-heading text-5xl text-teal/40">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-heading text-xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#a8b6c4]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-[#f7f9fb]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-28">
            <div>
              <p className="font-heading text-sm tracking-[0.2em] text-teal uppercase">Contact</p>
              <h2 className="mt-3 font-heading text-3xl text-ink md:text-4xl">Tell us about your project</h2>
              <p className="mt-4 max-w-md leading-relaxed text-steel">
                Share the building type, phase, and goals—we&apos;ll come back with a plan for model management,
                documents, or firm-wide BIM rollout.
              </p>
              <div className="mt-8 space-y-2 text-sm text-steel">
                <p>
                  <a className="text-ink underline-offset-4 hover:underline" href="mailto:hello@konturbim.com">
                    hello@konturbim.com
                  </a>
                </p>
                <p>(512) 555-0148</p>
                <p>Austin, TX · nationwide remote</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-steel md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-heading tracking-[0.16em] text-ink">KONTUR</p>
          <p>BIM models · construction documents · process adoption</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
