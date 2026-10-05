import type { ServiceItem } from "@/lib/site-content";

export const LOCALES = ["en", "pl", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}/`;
}

export function htmlLang(locale: Locale) {
  return locale;
}

type ServiceCopy = Pick<ServiceItem, "title" | "text" | "points">;

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  languageLabel: string;
  languageName: string;
  logoSubtitle: string;
  menuOpen: string;
  menuClose: string;
  nav: { services: string; sectors: string; method: string; contact: string };
  cta: string;
  hero: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    body: string;
    primary: string;
    secondary: string;
    tags: string;
  };
  practice: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    body: string;
    tags: string;
    cta: string;
  };
  servicesKicker: string;
  servicesTitle: string;
  method: {
    kicker: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  band: { title: string; body: string; cta: string };
  sectors: {
    kicker: string;
    title: string;
    items: { title: string; text: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    locationLabel: string;
    location: string;
    includeLabel: string;
    include: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    optional: string;
    company: string;
    preferred: string;
    emailOption: string;
    phoneOption: string;
    eitherOption: string;
    brief: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    briefPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    required: string;
    invalidEmail: string;
    phoneRequired: string;
    eitherPhone: string;
    notConfigured: string;
    sendFailed: string;
    notProvided: string;
  };
  footer: { services: string; method: string; request: string; admin: string };
  services: Record<string, ServiceCopy>;
};

const en: Messages = {
  metaTitle: "Axis BIM Solutions — Models, drawings and project setup",
  metaDescription:
    "We help owners, designers and contractors create reliable BIM models, coordinate information and turn existing buildings into accurate digital models. Based in Warsaw.",
  languageLabel: "Language",
  languageName: "English",
  logoSubtitle: "Models, drawings and project setup",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  nav: { services: "Services", sectors: "Sectors", method: "How we work", contact: "Contact" },
  cta: "Submit request",
  hero: {
    kicker: "Axis BIM Solutions · Warsaw",
    titleBefore: "A clear ",
    titleHighlight: "digital model",
    titleAfter: " for your building",
    body: "We put architecture, engineering and construction into one shared model, catch conflicts early and produce the drawings from that model.",
    primary: "Discuss a project",
    secondary: "Service scope",
    tags: "Detail-level alignment · Clash detection · Scan to BIM · IFC exchange",
  },
  practice: {
    kicker: "Practice",
    titleBefore: "BIM solutions that work in the ",
    titleHighlight: "real world",
    titleAfter: "",
    body: "We help owners, designers and contractors create reliable BIM models, coordinate information and turn existing buildings into accurate digital models.",
    tags: "Scan to BIM · BIM modeling · Engineering · 3D visualization",
    cta: "Our services",
  },
  servicesKicker: "Services",
  servicesTitle: "Scope of work",
  method: {
    kicker: "How we work",
    title: "From assessment to a working BIM solution",
    steps: [
      {
        title: "Assess",
        text: "We review your models, workflows and project processes to identify gaps, risks and opportunities for improvement.",
      },
      {
        title: "Plan",
        text: "We define the right BIM standards, workflows, information requirements and project setup for your team.",
      },
      {
        title: "Deliver",
        text: "We implement the agreed workflows, coordinate models, support your team and leave you with a working solution.",
      },
    ],
  },
  band: {
    title: "Let's take the next project together.",
    body: "Tell us the building, the stage and whether you need a model, drawings or a working process for your team.",
    cta: "Submit request",
  },
  sectors: {
    kicker: "Sectors",
    title: "Project types we coordinate",
    items: [
      { title: "Commercial", text: "Offices and mixed-use buildings, where many teams share one model." },
      { title: "Multifamily", text: "Housing with repeated floors and a fast cycle of drawings." },
      { title: "Industrial", text: "Plants and warehouses, with equipment, clearances and phased work." },
      { title: "Institutional", text: "Schools, healthcare and civic buildings with formal review packages." },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Send a project request",
    intro: "Fill in the form and we will get back to you shortly.",
    locationLabel: "Location",
    location: "Warsaw, Poland · EU/US remote",
    includeLabel: "What to include",
    include: "Building type, project stage, and whether you need a model, drawings or process setup.",
  },
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    optional: "(optional)",
    company: "Company",
    preferred: "Preferred contact method",
    emailOption: "Email",
    phoneOption: "Phone",
    eitherOption: "Either",
    brief: "Project brief",
    namePlaceholder: "Jordan Lee",
    emailPlaceholder: "jordan@firm.com",
    companyPlaceholder: "Acme Design Group",
    briefPlaceholder: "Building type, stage (SD/DD/CD), tools and what you need from us…",
    submit: "Submit request",
    sending: "Sending…",
    success: "Thank you. We will get back to you shortly.",
    required: "Name, email and project brief are required.",
    invalidEmail: "Enter a valid email so we can reply.",
    phoneRequired: "Add a phone number so we can call you.",
    eitherPhone: "Add a phone number, or choose email as the preferred contact method.",
    notConfigured: "Request inbox is not configured yet. Please try again later.",
    sendFailed: "Could not send the request. Please try again in a moment.",
    notProvided: "Not provided",
  },
  footer: { services: "Services", method: "How we work", request: "Send a project request", admin: "Admin" },
  services: {
    "01": {
      title: "Model coordination",
      text: "We bring the architect, engineers and contractor into one shared 3D model and flag conflicts before they become problems on site.",
      points: [
        "One shared model for the whole team",
        "A running list of issues to resolve",
        "Weekly updates everyone can use",
      ],
    },
    "02": {
      title: "Drawing production",
      text: "We produce plans, sections and schedules from the model, so the drawings match the building being designed.",
      points: ["Plans, sections and details from the model", "Files other teams can open", "Drawings updated when the design changes"],
    },
    "03": {
      title: "Scan to BIM",
      text: "We scan an existing building and turn it into an accurate digital model for renovation or to check the design against what is really there.",
      points: [
        "A scan of the existing building",
        "A usable model of what is already built",
        "A check of the design against the real building",
      ],
    },
    "04": {
      title: "BIM setup",
      text: "We set clear rules, file names and responsibilities, then stay with your team until the process works without constant help.",
      points: ["Rules everyone can follow", "Clear roles for each person", "Support on the first live project"],
    },
  },
};

const pl: Messages = {
  metaTitle: "Axis BIM Solutions — Modele, rysunki i organizacja projektu",
  metaDescription:
    "Pomagamy inwestorom, projektantom i wykonawcom tworzyć rzetelne modele BIM, koordynować informacje i zamieniać istniejące budynki w dokładne modele cyfrowe. Siedziba w Warszawie.",
  languageLabel: "Język",
  languageName: "Polski",
  logoSubtitle: "Modele, rysunki i setup projektu",
  menuOpen: "Otwórz menu",
  menuClose: "Zamknij menu",
  nav: { services: "Usługi", sectors: "Sektory", method: "Jak pracujemy", contact: "Kontakt" },
  cta: "Wyślij zapytanie",
  hero: {
    kicker: "Axis BIM Solutions · Warszawa",
    titleBefore: "Czytelny ",
    titleHighlight: "model cyfrowy",
    titleAfter: " Twojego budynku",
    body: "Łączymy architekturę, inżynierię i wykonawstwo w jednym wspólnym modelu, wychwytujemy kolizje wcześniej i z tego modelu opracowujemy rysunki.",
    primary: "Omów projekt",
    secondary: "Zakres usług",
    tags: "Dopasowanie detali · Wykrywanie kolizji · Scan to BIM · Wymiana IFC",
  },
  practice: {
    kicker: "Praktyka",
    titleBefore: "Rozwiązania BIM, które działają ",
    titleHighlight: "w praktyce",
    titleAfter: "",
    body: "Pomagamy inwestorom, projektantom i wykonawcom tworzyć rzetelne modele BIM, koordynować informacje i zamieniać istniejące budynki w dokładne modele cyfrowe.",
    tags: "Scan to BIM · Modelowanie BIM · Inżynieria · Wizualizacje 3D",
    cta: "Nasze usługi",
  },
  servicesKicker: "Usługi",
  servicesTitle: "Zakres prac",
  method: {
    kicker: "Jak pracujemy",
    title: "Od oceny do działającego rozwiązania BIM",
    steps: [
      {
        title: "Ocena",
        text: "Przeglądamy modele, procesy i organizację projektu, żeby wskazać luki, ryzyka i możliwości usprawnień.",
      },
      {
        title: "Plan",
        text: "Ustalamy standardy BIM, procesy, wymagania informacyjne i sposób organizacji projektu dla Waszego zespołu.",
      },
      {
        title: "Realizacja",
        text: "Wdrażamy uzgodnione procesy, koordynujemy modele, wspieramy zespół i zostawiamy działające rozwiązanie.",
      },
    ],
  },
  band: {
    title: "Weźmy kolejny projekt razem.",
    body: "Napiszcie, jaki to budynek, na jakim jest etapie i czy potrzebujecie modelu, rysunków czy procesu dla zespołu.",
    cta: "Wyślij zapytanie",
  },
  sectors: {
    kicker: "Sektory",
    title: "Typy projektów, które koordynujemy",
    items: [
      { title: "Komercyjne", text: "Biura i budynki wielofunkcyjne, w których wiele zespołów pracuje na jednym modelu." },
      { title: "Mieszkaniowe", text: "Budynki mieszkalne z powtarzalnymi kondygnacjami i szybkim cyklem rysunków." },
      { title: "Przemysłowe", text: "Zakłady i magazyny — z urządzeniami, skrajniami i pracą etapami." },
      {
        title: "Obiekty publiczne",
        text: "Szkoły, obiekty ochrony zdrowia i budynki publiczne z formalnymi pakietami do uzgodnień.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Wyślij zapytanie o projekt",
    intro: "Wypełnij formularz — odezwiemy się wkrótce.",
    locationLabel: "Lokalizacja",
    location: "Warszawa, Polska · zdalnie EU/US",
    includeLabel: "Co warto podać",
    include: "Typ budynku, etap projektu oraz to, czy potrzebujecie modelu, rysunków czy ustawienia procesu.",
  },
  form: {
    name: "Imię i nazwisko",
    email: "E-mail",
    phone: "Telefon",
    optional: "(opcjonalnie)",
    company: "Firma",
    preferred: "Preferowany kontakt",
    emailOption: "E-mail",
    phoneOption: "Telefon",
    eitherOption: "Dowolnie",
    brief: "Opis projektu",
    namePlaceholder: "Anna Kowalska",
    emailPlaceholder: "anna@biuro.pl",
    companyPlaceholder: "Biuro Projektowe",
    briefPlaceholder: "Typ budynku, etap, narzędzia i czego od nas potrzebujecie…",
    submit: "Wyślij zapytanie",
    sending: "Wysyłanie…",
    success: "Dziękujemy. Odezwiemy się wkrótce.",
    required: "Imię, e-mail i opis projektu są wymagane.",
    invalidEmail: "Podaj poprawny e-mail, żebyśmy mogli odpowiedzieć.",
    phoneRequired: "Podaj numer telefonu, żebyśmy mogli zadzwonić.",
    eitherPhone: "Podaj numer telefonu albo wybierz e-mail jako preferowany kontakt.",
    notConfigured: "Skrzynka zapytań nie jest jeszcze skonfigurowana. Spróbuj później.",
    sendFailed: "Nie udało się wysłać zapytania. Spróbuj za chwilę.",
    notProvided: "Nie podano",
  },
  footer: { services: "Usługi", method: "Jak pracujemy", request: "Wyślij zapytanie o projekt", admin: "Admin" },
  services: {
    "01": {
      title: "Koordynacja modelu",
      text: "Łączymy architekta, inżynierów i wykonawcę w jednym wspólnym modelu 3D i wskazujemy kolizje, zanim staną się problemem na budowie.",
      points: [
        "Jeden wspólny model dla całego zespołu",
        "Bieżąca lista spraw do rozwiązania",
        "Cotygodniowe aktualizacje dla wszystkich",
      ],
    },
    "02": {
      title: "Opracowanie rysunków",
      text: "Przygotowujemy rzuty, przekroje i zestawienia z modelu, dzięki czemu rysunki odpowiadają projektowanemu budynkowi.",
      points: [
        "Rzuty, przekroje i detale z modelu",
        "Pliki, które otworzą inne zespoły",
        "Rysunki aktualizowane wraz ze zmianą projektu",
      ],
    },
    "03": {
      title: "Scan to BIM",
      text: "Skanujemy istniejący budynek i zamieniamy go w dokładny model cyfrowy do przebudowy albo do sprawdzenia projektu z tym, co jest na miejscu.",
      points: [
        "Skan istniejącego budynku",
        "Użyteczny model tego, co już zbudowano",
        "Porównanie projektu z rzeczywistym budynkiem",
      ],
    },
    "04": {
      title: "Wdrożenie BIM",
      text: "Ustalamy jasne zasady, nazwy plików i odpowiedzialności, a potem zostajemy z zespołem, aż proces działa bez stałego wsparcia.",
      points: ["Zasady, których da się przestrzegać", "Jasne role dla każdej osoby", "Wsparcie przy pierwszym żywym projekcie"],
    },
  },
};

const de: Messages = {
  metaTitle: "Axis BIM Solutions — Modelle, Pläne und Projektsetup",
  metaDescription:
    "Wir helfen Bauherren, Planern und Auftragnehmern, belastbare BIM-Modelle zu erstellen, Informationen zu koordinieren und bestehende Gebäude in genaue digitale Modelle zu überführen. Sitz in Warschau.",
  languageLabel: "Sprache",
  languageName: "Deutsch",
  logoSubtitle: "Modelle, Pläne und Projektsetup",
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
  nav: { services: "Leistungen", sectors: "Sektoren", method: "So arbeiten wir", contact: "Kontakt" },
  cta: "Anfrage senden",
  hero: {
    kicker: "Axis BIM Solutions · Warschau",
    titleBefore: "Ein klares ",
    titleHighlight: "digitales Modell",
    titleAfter: " für Ihr Gebäude",
    body: "Wir bringen Architektur, Ingenieurwesen und Bauausführung in einem gemeinsamen Modell zusammen, erkennen Konflikte früh und leiten die Zeichnungen aus diesem Modell ab.",
    primary: "Projekt besprechen",
    secondary: "Leistungsumfang",
    tags: "Detailabstimmung · Kollisionsprüfung · Scan to BIM · IFC-Austausch",
  },
  practice: {
    kicker: "Praxis",
    titleBefore: "BIM-Lösungen, die ",
    titleHighlight: "in der Praxis",
    titleAfter: " funktionieren",
    body: "Wir helfen Bauherren, Planern und Auftragnehmern, belastbare BIM-Modelle zu erstellen, Informationen zu koordinieren und bestehende Gebäude in genaue digitale Modelle zu überführen.",
    tags: "Scan to BIM · BIM-Modellierung · Engineering · 3D-Visualisierung",
    cta: "Unsere Leistungen",
  },
  servicesKicker: "Leistungen",
  servicesTitle: "Leistungsumfang",
  method: {
    kicker: "So arbeiten wir",
    title: "Von der Bestandsaufnahme zur funktionierenden BIM-Lösung",
    steps: [
      {
        title: "Analyse",
        text: "Wir prüfen Modelle, Abläufe und Projektprozesse, um Lücken, Risiken und Verbesserungsmöglichkeiten zu erkennen.",
      },
      {
        title: "Planung",
        text: "Wir definieren BIM-Standards, Abläufe, Informationsanforderungen und das Projektsetup für Ihr Team.",
      },
      {
        title: "Umsetzung",
        text: "Wir führen die vereinbarten Abläufe ein, koordinieren Modelle, unterstützen Ihr Team und hinterlassen eine funktionierende Lösung.",
      },
    ],
  },
  band: {
    title: "Nehmen wir das nächste Projekt gemeinsam an.",
    body: "Sagen Sie uns, um welches Gebäude es geht, in welcher Phase es steht und ob Sie ein Modell, Zeichnungen oder einen Ablauf für Ihr Team brauchen.",
    cta: "Anfrage senden",
  },
  sectors: {
    kicker: "Sektoren",
    title: "Projektarten, die wir koordinieren",
    items: [
      { title: "Gewerbe", text: "Büros und gemischt genutzte Gebäude, in denen viele Teams an einem Modell arbeiten." },
      { title: "Wohnungsbau", text: "Wohngebäude mit wiederholten Geschossen und einem schnellen Zeichnungszyklus." },
      { title: "Industrie", text: "Anlagen und Hallen — mit Ausrüstung, Abständen und phasenweiser Ausführung." },
      {
        title: "Öffentliche Bauten",
        text: "Schulen, Gesundheits- und öffentliche Gebäude mit formalen Prüfpaketen.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Projektanfrage senden",
    intro: "Füllen Sie das Formular aus — wir melden uns in Kürze.",
    locationLabel: "Standort",
    location: "Warschau, Polen · EU/US remote",
    includeLabel: "Was Sie angeben sollten",
    include: "Gebäudetyp, Projektphase und ob Sie ein Modell, Zeichnungen oder ein Prozesssetup brauchen.",
  },
  form: {
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    optional: "(optional)",
    company: "Unternehmen",
    preferred: "Bevorzugter Kontakt",
    emailOption: "E-Mail",
    phoneOption: "Telefon",
    eitherOption: "Beides",
    brief: "Projektbeschreibung",
    namePlaceholder: "Anna Berger",
    emailPlaceholder: "anna@buero.de",
    companyPlaceholder: "Planungsbüro Nord",
    briefPlaceholder: "Gebäudetyp, Phase, Werkzeuge und was Sie von uns brauchen…",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    success: "Vielen Dank. Wir melden uns in Kürze.",
    required: "Name, E-Mail und Projektbeschreibung sind erforderlich.",
    invalidEmail: "Geben Sie eine gültige E-Mail an, damit wir antworten können.",
    phoneRequired: "Geben Sie eine Telefonnummer an, damit wir anrufen können.",
    eitherPhone: "Geben Sie eine Telefonnummer an oder wählen Sie E-Mail als bevorzugten Kontakt.",
    notConfigured: "Das Anfragepostfach ist noch nicht eingerichtet. Bitte versuchen Sie es später erneut.",
    sendFailed: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es gleich noch einmal.",
    notProvided: "Nicht angegeben",
  },
  footer: {
    services: "Leistungen",
    method: "So arbeiten wir",
    request: "Projektanfrage senden",
    admin: "Admin",
  },
  services: {
    "01": {
      title: "Modellkoordination",
      text: "Wir bringen Architekt, Fachplaner und Auftragnehmer in einem gemeinsamen 3D-Modell zusammen und markieren Konflikte, bevor sie auf der Baustelle zum Problem werden.",
      points: [
        "Ein gemeinsames Modell für das ganze Team",
        "Eine laufende Liste offener Punkte",
        "Wöchentliche Updates, die alle nutzen können",
      ],
    },
    "02": {
      title: "Planerstellung",
      text: "Wir erstellen Grundrisse, Schnitte und Listen aus dem Modell, damit die Zeichnungen zum geplanten Gebäude passen.",
      points: [
        "Grundrisse, Schnitte und Details aus dem Modell",
        "Dateien, die andere Teams öffnen können",
        "Zeichnungen, die sich mit dem Entwurf aktualisieren",
      ],
    },
    "03": {
      title: "Scan to BIM",
      text: "Wir scannen ein bestehendes Gebäude und machen daraus ein genaues digitales Modell für den Umbau oder den Abgleich des Entwurfs mit dem Bestand.",
      points: [
        "Ein Scan des bestehenden Gebäudes",
        "Ein nutzbares Modell des bereits Gebauten",
        "Ein Abgleich des Entwurfs mit dem realen Gebäude",
      ],
    },
    "04": {
      title: "BIM-Einführung",
      text: "Wir legen klare Regeln, Dateinamen und Verantwortlichkeiten fest und bleiben beim Team, bis der Prozess ohne ständige Hilfe funktioniert.",
      points: [
        "Regeln, denen alle folgen können",
        "Klare Rollen für jede Person",
        "Unterstützung beim ersten laufenden Projekt",
      ],
    },
  },
};

export const messages: Record<Locale, Messages> = { en, pl, de };

export function getMessages(locale: Locale) {
  return messages[locale];
}

const DEFAULT_LOCATION = "Warsaw, Poland · EU/US remote";

export function localizeServices(services: ServiceItem[], locale: Locale): ServiceItem[] {
  const copy = messages[locale].services;
  return services.map((service) => {
    const translated = copy[service.code];
    if (!translated) return service;
    return {
      ...service,
      title: translated.title,
      text: translated.text,
      points: translated.points,
    };
  });
}

export function localizeLocation(location: string, locale: Locale) {
  if (locale === "en" || location === DEFAULT_LOCATION) {
    return locale === "en" ? location || messages.en.contact.location : messages[locale].contact.location;
  }
  return location;
}
