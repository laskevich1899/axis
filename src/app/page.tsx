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
    points: [
      "Multi-discipline model federation",
      "Clash detection & issue tracking",
      "CDE setup and weekly model health checks",
    ],
  },
  {
    title: "Construction documents",
    text: "Produce drawings and schedules straight from the model—consistent, checkable, and ready for review, permitting, and the field.",
    points: [
      "Sheet sets, details, and schedules from the model",
      "Permit and IFC packages",
      "As-built and handover documentation",
    ],
  },
  {
    title: "BIM process adoption",
    text: "Embed BIM into how your firm operates: standards, roles, CDE workflows, team training, and a process you can measure.",
    points: [
      "BEP / standards and naming conventions",
      "Role maps and RACI for design–build handoffs",
      "Training workshops and ongoing coaching",
    ],
  },
];

const steps = [
  {
    title: "Assessment",
    text: "We map current workflows, models, and handoff gaps between design, review, and construction—then prioritize what actually moves delivery.",
  },
  {
    title: "Data framework",
    text: "We set model structure, LOD expectations, and a common data environment sized to your projects and software stack.",
  },
  {
    title: "Launch & support",
    text: "We run models and documents, upskill your team, and leave a working BIM practice inside the company—not a binder on a shelf.",
  },
];

const industries = [
  {
    title: "Commercial & mixed-use",
    text: "Office, retail, and mixed programs where coordination density and tenant fit-outs demand a living model.",
  },
  {
    title: "Residential & multifamily",
    text: "Mid- and high-rise housing with repeating units, tight MEP corridors, and fast documentation cycles.",
  },
  {
    title: "Industrial & logistics",
    text: "Warehouses, plants, and specialized facilities with equipment clearances and phased construction.",
  },
  {
    title: "Public & institutional",
    text: "Schools, healthcare, and civic work with rigorous review packages and stakeholder visibility.",
  },
];

const capabilities = [
  { label: "Authoring", items: "Revit · Archicad · Civil 3D" },
  { label: "Coordination", items: "Navisworks · Solibri · BIMcollab" },
  { label: "Data & CDE", items: "ACC · BIM 360 · SharePoint / ISO 19650-ready" },
  { label: "Visualization", items: "Enscape · Twinmotion · custom view sets" },
];

const engagements = [
  {
    phase: "Design development",
    title: "Federated model for a mid-rise multifamily",
    text: "Stood up a shared CDE, aligned structural/MEP LOD, and cut weekly clash cycles from scattered emails to a tracked issue board.",
  },
  {
    phase: "Permit & CDs",
    title: "Document set pulled from one model",
    text: "Rebuilt sheet logic so plans, schedules, and details stayed in sync through permit revisions—fewer redraws, cleaner RFIs later.",
  },
  {
    phase: "Firm rollout",
    title: "BIM standards for a 40-person studio",
    text: "Wrote the BEP, trained project leads, and coached two pilot jobs until the new process ran without us in the room.",
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
          <nav className="hidden items-center gap-8 text-[0.95rem] text-steel lg:flex" aria-label="Primary">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#industries" className="transition-colors hover:text-foreground">
              Industries
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
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
        <section className="hero-atmosphere border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24 lg:gap-16">
            <div className="max-w-xl">
              <Reveal>
                <p className="text-sm font-medium tracking-[0.16em] text-signal uppercase">
                  Axis BIM Solutions · Warsaw
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
              <Reveal delayMs={400}>
                <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-steel">Focus</dt>
                    <dd className="mt-1 font-medium text-foreground">Live models &amp; CDs</dd>
                  </div>
                  <div>
                    <dt className="text-steel">Based in</dt>
                    <dd className="mt-1 font-medium text-foreground">Warsaw, Poland</dd>
                  </div>
                  <div>
                    <dt className="text-steel">Delivery</dt>
                    <dd className="mt-1 font-medium text-foreground">On-site &amp; remote</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delayMs={180} className="w-full">
              <div className="overflow-hidden rounded-xl border border-border">
                <div className="visual-panel relative aspect-[4/3] w-full">
                  <BimHeroVisual />
                </div>
                <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
                  {[
                    { k: "LOD", v: "Aligned by phase" },
                    { k: "IFC", v: "Exchange-ready" },
                    { k: "CDE", v: "Single source" },
                  ].map((item) => (
                    <div key={item.k} className="bg-panel px-3 py-3 sm:px-4">
                      <p className="text-xs font-medium tracking-wide text-signal uppercase">{item.k}</p>
                      <p className="mt-1 text-xs text-steel sm:text-sm">{item.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-mist">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-20">
            <Image
              src="/axis-logo.png"
              alt="Axis BIM Solutions logo"
              width={640}
              height={640}
              className="mx-auto h-auto w-full max-w-xs md:max-w-sm"
              priority
            />
            <div>
              <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">About</p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                A BIM partner that stays in the model with you
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Axis BIM Solutions sits between design intent and field reality. We author and maintain models, produce
                construction documents, and help organizations adopt BIM without theater—so coordination, reviews, and
                handoffs share one digital contour.
              </p>
              <p className="mt-4 leading-relaxed text-steel">
                From our base in Warsaw we support European and international teams: embedded on projects, remote on
                recurring model management, or both when a rollout needs a pilot job and a lasting standard.
              </p>
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
                  className="grid gap-4 border-b border-border py-10 md:grid-cols-[3rem_minmax(0,0.85fr)_1.15fr] md:gap-12 md:py-12"
                >
                  <span className="font-heading text-sm text-steel/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-steel">{service.text}</p>
                  </div>
                  <ul className="space-y-2.5 text-sm text-steel md:pt-1">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="industries" className="border-b border-border bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Industries</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Where the process has to hold up
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              Different building types, same requirement: a model people trust when drawings, reviews, and site
              decisions collide.
            </p>
            <ul className="mt-14 grid gap-8 sm:grid-cols-2">
              {industries.map((item) => (
                <li key={item.title} className="border-t border-border pt-6">
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Stack</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Tools we work in every day
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              We meet you in your environment—then tighten naming, exchanges, and reviews so the software serves the
              process.
            </p>
            <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap) => (
                <div key={cap.label} className="rounded-xl border border-border bg-panel px-5 py-5">
                  <dt className="text-xs font-medium tracking-[0.14em] text-signal uppercase">{cap.label}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-foreground">{cap.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="border-b border-border bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="text-sm font-medium tracking-[0.14em] text-signal uppercase">Selected work</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Engagements that look like yours
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              Composite examples from recent patterns of work—how we typically plug into a project or a firm.
            </p>
            <ul className="mt-14 divide-y divide-border border-y border-border">
              {engagements.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-10 md:grid-cols-[11rem_1fr] md:gap-12 md:py-12"
                >
                  <p className="text-sm font-medium text-signal">{item.phase}</p>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-steel">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="border-b border-border bg-background">
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

        <section id="contact" className="bg-mist">
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
              <div className="mt-8 space-y-3 text-sm text-steel">
                <p>
                  <span className="block text-xs tracking-wide text-signal uppercase">Email</span>
                  <a className="text-foreground underline-offset-4 hover:underline" href="mailto:hello@axisbim.com">
                    hello@axisbim.com
                  </a>
                </p>
                <p>
                  <span className="block text-xs tracking-wide text-signal uppercase">Phone</span>
                  +48 22 555 01 48
                </p>
                <p>
                  <span className="block text-xs tracking-wide text-signal uppercase">Studio</span>
                  Warsaw, Poland · remote-friendly across the EU
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
          <div>
            <AxisLogo variant="lockup" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              BIM Modeling, Engineering &amp; 3D Visualization—model management, construction documents, and process
              adoption from Warsaw.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-signal uppercase">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>
                <a href="#services" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-foreground">
                  Industries
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-foreground">
                  Selected work
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-foreground">
                  Approach
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-signal uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>
                <a href="mailto:hello@axisbim.com" className="hover:text-foreground">
                  hello@axisbim.com
                </a>
              </li>
              <li>+48 22 555 01 48</li>
              <li>Warsaw, Poland</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-steel sm:flex-row sm:justify-between md:px-8">
            <p>© {new Date().getFullYear()} Axis BIM Solutions</p>
            <p>Warsaw · EU &amp; remote delivery</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
