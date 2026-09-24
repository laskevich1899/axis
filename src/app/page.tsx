import { buttonVariants } from "@/components/ui/button";
import { AxisLogo } from "@/components/axis-logo";
import { BimHeroVisual } from "@/components/bim-hero-visual";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { readSiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Survey",
    text: "Audit models, exchanges and handoff points between design, review and site.",
  },
  {
    title: "Specify",
    text: "Set detail levels, parameters, CDE folders and clash tolerances for the project type.",
  },
  {
    title: "Operate",
    text: "Run coordination, publish documents, train leads and hand off a working setup.",
  },
];

const sectors = [
  { title: "Commercial", text: "Office and mixed-use with dense MEP and fit-out packages." },
  { title: "Multifamily", text: "Repetitive units, corridor MEP and fast CD cycles." },
  { title: "Industrial", text: "Equipment clearances, racks and phased construction." },
  { title: "Institutional", text: "Schools, healthcare and civic review packages." },
];

const stack = [
  { group: "Authoring", tools: "Revit · AutoCAD · Tekla" },
  { group: "Coordination", tools: "Navisworks · Solibri" },
  { group: "CDE", tools: "ACC / BIM 360" },
];

export default async function Home() {
  const { contact, services, slides } = await readSiteContent();

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main id="top" className="flex-1">
        <section className="hero-atmosphere border-b border-border">
          <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:px-5 sm:py-12 md:grid-cols-2 md:gap-10 md:px-8 md:py-14">
            <div className="hero-copy">
              <Reveal>
                <p className="font-mono text-xs tracking-wide text-signal uppercase">
                  Axis BIM Solutions · Warsaw
                </p>
              </Reveal>
              <Reveal delayMs={80}>
                <h1 className="mt-3 max-w-lg font-heading text-[1.7rem] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Engineering-grade BIM for models, drawings and delivery
                </h1>
              </Reveal>
              <Reveal delayMs={150}>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-steel">
                  We coordinate multidisciplinary models, produce construction documents from the model and install
                  BIM processes that hold under real project pressure.
                </p>
              </Reveal>
              <Reveal delayMs={220} className="mt-6 flex flex-wrap gap-2.5">
                <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "h-10 rounded px-5")}>
                  Discuss a project
                </a>
                <a
                  href="#services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-10 rounded border-border bg-panel px-5",
                  )}
                >
                  Service scope
                </a>
              </Reveal>
              <Reveal delayMs={280}>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 font-mono text-xs text-steel">
                  <li>Detail-level alignment</li>
                  <li>Clash detection</li>
                  <li>Scan to BIM</li>
                  <li>IFC exchange</li>
                </ul>
              </Reveal>
            </div>

            <Reveal delayMs={120}>
              <figure className="overflow-hidden rounded border border-border bg-panel shadow-sm">
                <BimHeroVisual slides={slides} />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-panel">
          <div className="mx-auto grid max-w-6xl gap-8 section-compact md:grid-cols-[13rem_1fr] md:items-start">
            <AxisLogo variant="stacked" />
            <div>
              <p className="font-mono text-xs tracking-wide text-signal uppercase">Practice</p>
              <h2 className="mt-1.5 font-heading text-2xl font-semibold tracking-tight text-foreground">
                From federated model to field-ready set
              </h2>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-steel">
                Axis supports owners, A/E firms and contractors when geometry, data and documents must stay consistent—
                including Scan to BIM for existing assets. Warsaw-based, available on-site or remote across the EU.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl section-compact">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs tracking-wide text-signal uppercase">Services</p>
                <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-foreground">Scope of work</h2>
              </div>
              <p className="max-w-md text-sm text-steel">
                {services.length} delivery track{services.length === 1 ? "" : "s"}. Engage one or combine into a single
                package.
              </p>
            </div>

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {services.map((service) => (
                <li
                  key={service.code}
                  className="grid gap-3 py-6 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 md:py-7"
                >
                  <span className="font-mono text-xs text-signal">{service.code}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel">{service.text}</p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-steel md:pt-0.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="font-mono text-signal">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sectors" className="border-b border-border bg-panel">
          <div className="mx-auto max-w-6xl section-compact">
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Sectors</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-foreground">
              Project types we coordinate
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectors.map((sector) => (
                <li key={sector.title} className="border border-border bg-background p-4">
                  <h3 className="font-heading text-base font-semibold text-foreground">{sector.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{sector.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl section-compact">
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Platform</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-foreground">
              Software environment
            </h2>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {stack.map((row) => (
                <div key={row.group} className="border border-border bg-panel px-4 py-3">
                  <dt className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">{row.group}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{row.tools}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="method" className="border-b border-border bg-mist">
          <div className="mx-auto max-w-6xl section-compact">
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Method</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-foreground">
              How an engagement runs
            </h2>
            <ol className="mt-7 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t-2 border-signal pt-4">
                  <span className="font-mono text-xs text-steel">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="bg-panel">
          <div className="mx-auto grid max-w-6xl gap-8 section-compact md:grid-cols-[0.85fr_1.15fr] md:gap-12">
            <div>
              <p className="font-mono text-xs tracking-wide text-signal uppercase">Contact</p>
              <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-foreground">
                Send a project brief
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Include typology, stage (SD / DD / CD / CA), authoring tools and whether you need model work,
                drawings or process setup.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">Email</dt>
                  <dd>
                    <a className="break-all text-foreground hover:underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">Phone</dt>
                  <dd className="text-foreground">{contact.phone}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] tracking-wide text-signal uppercase">Location</dt>
                  <dd className="text-foreground">{contact.location}</dd>
                </div>
              </dl>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-steel sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <AxisLogo variant="lockup" />
          <p className="font-mono text-xs">BIM modeling · engineering · 3D visualization</p>
          <div className="flex items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} Axis BIM Solutions</p>
            <a href="/admin" className="font-mono text-steel/70 hover:text-foreground">
              Admin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
