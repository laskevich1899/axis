import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { readSiteContent } from "@/lib/site-content";
import { getMessages, htmlLang, localizeLocation, localizeServices, type Locale } from "@/lib/i18n";

const buttonClass =
  "inline-flex h-11 items-center bg-[#4187d3] px-6 text-[11px] font-semibold tracking-[0.08em] text-white uppercase hover:bg-[#3677c0]";

export async function HomePage({ locale }: { locale: Locale }) {
  const { contact, services: sourceServices } = await readSiteContent();
  const copy = getMessages(locale);
  const services = localizeServices(sourceServices, locale);
  const location = localizeLocation(contact.location, locale);
  const links = [
    { href: "#services", label: copy.nav.services },
    { href: "#sectors", label: copy.nav.sectors },
    { href: "#method", label: copy.nav.method },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <div id="top" className="bg-[#e7e9f2] text-[#161e38]">
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(htmlLang(locale))}`,
        }}
      />
      <SiteHeader
        location={location}
        locale={locale}
        logoSubtitle={copy.logoSubtitle}
        links={links}
        cta={copy.cta}
        menuOpenLabel={copy.menuOpen}
        menuCloseLabel={copy.menuClose}
        languageLabel={copy.languageLabel}
      />

      <main>
        <section className="relative min-h-[34rem] overflow-hidden bg-[#12182c] text-white md:min-h-[40rem]">
          <img
            src="/hero.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#070b16] via-[#070b16]/92 to-[#070b16]/45 md:via-[#070b16]/85 md:to-[#070b16]/30"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#070b16]/75 via-transparent to-[#070b16]/45"
            aria-hidden
          />
          <div className="relative mx-auto flex min-h-[34rem] max-w-6xl items-center px-4 py-16 md:min-h-[40rem] md:px-8">
            <div className="max-w-xl hero-copy-readable">
              <p className="text-[11px] tracking-[0.18em] text-[#e6d7b8] uppercase">{copy.hero.kicker}</p>
              <h1 className="mt-4 font-heading text-[2.4rem] leading-[1.05] font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
                {copy.hero.titleBefore}
                <span className="text-[#e6d7b8]">{copy.hero.titleHighlight}</span>
                {copy.hero.titleAfter}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/90">{copy.hero.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className={`${buttonClass} w-full justify-center sm:w-auto`}>
                  {copy.hero.primary}
                </a>
                <a
                  href="#services"
                  className="inline-flex h-11 w-full items-center justify-center border border-white/70 bg-white/10 px-6 text-[11px] font-semibold tracking-[0.08em] uppercase text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  {copy.hero.secondary}
                </a>
              </div>
              <p className="mt-8 max-w-lg text-xs leading-relaxed tracking-wide text-white/80">{copy.hero.tags}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#161e38] text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
            <p className="text-[11px] tracking-[0.18em] text-white/60 uppercase">{copy.practice.kicker}</p>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-medium tracking-tight md:text-5xl">
              {copy.practice.titleBefore}
              <span className="text-[#c2b08a]">{copy.practice.titleHighlight}</span>
              {copy.practice.titleAfter}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">{copy.practice.body}</p>
            <p className="mt-4 text-sm text-[#c2b08a]">{copy.practice.tags}</p>
            <a href="#services" className={`${buttonClass} mt-8`}>
              {copy.practice.cta}
            </a>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <p className="text-[11px] tracking-[0.18em] text-[#4187d3] uppercase">{copy.servicesKicker}</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight">{copy.servicesTitle}</h2>
          <ul className="mt-10 divide-y divide-[#161e38]/10 border-y border-[#161e38]/10">
            {services.map((service) => (
              <li key={service.code} className="grid gap-4 py-8 md:grid-cols-[4.5rem_1fr_1fr] md:gap-10">
                <span className="font-heading text-2xl text-[#4187d3]">{service.code}</span>
                <div>
                  <h3 className="font-heading text-2xl font-medium tracking-tight">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#3c4658]">{service.text}</p>
                </div>
                <ul className="space-y-2 text-sm text-[#3c4658]">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#4187d3]">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="method" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
            <p className="text-[11px] tracking-[0.18em] text-[#4187d3] uppercase">{copy.method.kicker}</p>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl font-medium tracking-tight md:text-5xl">
              {copy.method.title}
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {copy.method.steps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-heading text-sm tracking-[0.16em] text-[#c2b08a] uppercase">
                    {String(index + 1).padStart(2, "0")} — {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#3c4658]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#161e38] text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
            <h2 className="font-heading text-3xl font-medium tracking-tight md:text-5xl">{copy.band.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">{copy.band.body}</p>
            <a href="#contact" className={`${buttonClass} mt-8`}>
              {copy.band.cta}
            </a>
          </div>
        </section>

        <section id="sectors" className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <p className="text-[11px] tracking-[0.18em] text-[#4187d3] uppercase">{copy.sectors.kicker}</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight">{copy.sectors.title}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.sectors.items.map((sector) => (
              <li key={sector.title} className="bg-white p-6">
                <h3 className="font-heading text-xl font-medium">{sector.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3c4658]">{sector.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-20">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[#4187d3] uppercase">{copy.contact.kicker}</p>
              <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight">{copy.contact.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#3c4658]">{copy.contact.intro}</p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] tracking-[0.08em] text-[#4187d3] uppercase">{copy.contact.locationLabel}</dt>
                  <dd>{location}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.08em] text-[#4187d3] uppercase">{copy.contact.includeLabel}</dt>
                  <dd className="text-[#3c4658]">{copy.contact.include}</dd>
                </div>
              </dl>
            </div>
            <ContactForm copy={copy.form} locale={locale} />
          </div>
        </section>
      </main>

      <footer className="bg-[#12182c] text-white/75">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
          <div>
            <p className="text-sm text-[#c2b08a]">Axis BIM Solutions</p>
            <p className="mt-3 text-sm leading-relaxed">
              {location}
              <br />
              <a href="#contact" className="hover:text-white">
                {copy.footer.request}
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm text-[#4187d3]">{copy.footer.services}</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {services.map((service) => (
                <li key={service.code}>
                  <a href="#services" className="hover:text-white">
                    {service.code} {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-[#4187d3]">{copy.footer.method}</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {copy.method.steps.map((step, index) => (
                <li key={step.title}>
                  <a href="#method" className="hover:text-white">
                    {String(index + 1).padStart(2, "0")} {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-xs text-white/50 md:px-8">
            <p>© {new Date().getFullYear()} Axis BIM Solutions</p>
            <a href="/admin" className="hover:text-white">
              {copy.footer.admin}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
