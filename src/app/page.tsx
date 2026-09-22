import { Button } from "@/components/ui/button";
import { BimHeroVisual } from "@/components/bim-hero-visual";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const services = [
  {
    number: "01",
    title: "Ведение моделей проектов",
    text: "Поддерживаем актуальную BIM-модель на всём жизненном цикле: координация дисциплин, коллизии, версии и единый контур данных.",
  },
  {
    number: "02",
    title: "Проектная документация",
    text: "Формируем чертежи и спецификации напрямую из модели — согласованно, проверяемо и готово к экспертизе и стройке.",
  },
  {
    number: "03",
    title: "Внедрение BIM-процессов",
    text: "Встраиваем BIM в структуру организации: регламенты, роли, CDE, обучение команд и измеримый рабочий процесс.",
  },
];

const steps = [
  {
    title: "Диагностика",
    text: "Разбираем текущие процессы, модели и точки потерь между проектированием, экспертизой и стройкой.",
  },
  {
    title: "Контур данных",
    text: "Настраиваем структуру модели, уровни детализации и среду общих данных под ваши объекты.",
  },
  {
    title: "Запуск и сопровождение",
    text: "Ведём модели и документацию, обучаем команду и оставляем работающий BIM-процесс внутри компании.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a href="#top" className="font-heading text-lg tracking-[0.18em] text-ink md:text-xl">
            КОНТУР
          </a>
          <nav className="hidden items-center gap-8 text-sm text-steel md:flex" aria-label="Основная навигация">
            <a href="#services" className="transition-colors hover:text-ink">
              Услуги
            </a>
            <a href="#approach" className="transition-colors hover:text-ink">
              Подход
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              Контакты
            </a>
          </nav>
          <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-10 px-4">
            Связаться
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
                  КОНТУР
                </p>
              </Reveal>
              <Reveal delayMs={120}>
                <h1 className="mt-6 max-w-lg font-heading text-2xl leading-tight text-ink sm:text-3xl md:text-4xl">
                  Цифровой контур ваших объектов
                </h1>
              </Reveal>
              <Reveal delayMs={220}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-steel md:text-lg">
                  Ведение BIM-моделей, проектная документация и внедрение процессов в структуру организаций.
                </p>
              </Reveal>
              <Reveal delayMs={320} className="mt-8 flex flex-wrap gap-3">
                <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-11 px-6 text-base">
                  Обсудить проект
                </Button>
                <Button
                  render={<a href="#services" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="h-11 border-steel/40 bg-white/70 px-6 text-base backdrop-blur-sm"
                >
                  Смотреть услуги
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border bg-[#f7f9fb]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="font-heading text-sm tracking-[0.2em] text-teal uppercase">Услуги</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl text-ink md:text-4xl">
              Три опоры BIM-практики
            </h2>
            <p className="mt-4 max-w-xl text-steel">
              Работаем там, где модель должна оставаться живой, документация — согласованной, а процесс — частью
              компании.
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
            <p className="font-heading text-sm tracking-[0.2em] text-brass uppercase">Подход</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl md:text-4xl">От модели к рабочему процессу</h2>
            <p className="mt-4 max-w-xl text-[#a8b6c4]">
              Не продаём «внедрение ради внедрения» — выстраиваем контур, в котором модель, люди и документы говорят на
              одном языке.
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
              <p className="font-heading text-sm tracking-[0.2em] text-teal uppercase">Контакты</p>
              <h2 className="mt-3 font-heading text-3xl text-ink md:text-4xl">Расскажите о проекте</h2>
              <p className="mt-4 max-w-md leading-relaxed text-steel">
                Опишите объект, стадию и задачу — вернёмся с предложением по ведению модели, документации или внедрению
                BIM.
              </p>
              <div className="mt-8 space-y-2 text-sm text-steel">
                <p>
                  <a className="text-ink underline-offset-4 hover:underline" href="mailto:hello@kontur-bim.ru">
                    hello@kontur-bim.ru
                  </a>
                </p>
                <p>+7 (495) 000-00-00</p>
                <p>Москва · удалённо по РФ</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-steel md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-heading tracking-[0.16em] text-ink">КОНТУР</p>
          <p>BIM-модели · документация · внедрение процессов</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
