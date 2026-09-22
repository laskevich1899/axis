import { createHmac, timingSafeEqual } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type ServiceItem = {
  code: string;
  title: string;
  text: string;
  points: string[];
};

export type SlideItem = {
  id: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
};

export type SiteContent = {
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  services: ServiceItem[];
  slides: SlideItem[];
};

export const SESSION_COOKIE = "axis_admin_session";

export const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: "federated-model",
    src: "/slides/01-federated-model.png",
    title: "Federated model",
    caption: "Multidisciplinary coordination in one shared model",
    alt: "Multidisciplinary federated BIM model with coordination flows",
  },
  {
    id: "scan-to-bim",
    src: "/slides/02-scan-to-bim.png",
    title: "Scan to BIM",
    caption: "Point clouds registered into as-built geometry",
    alt: "Scan to BIM workflow from point cloud capture to as-built model",
  },
  {
    id: "clash-detection",
    src: "/slides/03-clash-detection.png",
    title: "Clash detection",
    caption: "Discipline overlays reviewed before documents freeze",
    alt: "Clash detection with discipline overlay and issue markup",
  },
  {
    id: "coordinated-docs",
    src: "/slides/04-coordinated-docs.png",
    title: "Documents",
    caption: "Sheets, sections and IFC packages from the model",
    alt: "Coordinated documents output from the federated model",
  },
];

const CONTENT_PATH = path.join(process.cwd(), "data", "site-content.json");
export const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "slides");

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "axis-admin";
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET?.trim() || `axis-secret:${getAdminPassword()}`;
}

export function createSessionToken() {
  return createHmac("sha256", getSessionSecret()).update("axis-admin-ok").digest("hex");
}

export function isValidSessionToken(token: string | undefined) {
  if (!token) return false;
  const expected = createSessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function passwordsMatch(input: string) {
  const expected = getAdminPassword();
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function readSiteContent(): Promise<SiteContent> {
  const raw = await fs.readFile(CONTENT_PATH, "utf8");
  const parsed = JSON.parse(raw) as Partial<SiteContent>;
  return normalizeContent({
    contact: parsed.contact ?? { email: "", phone: "", location: "" },
    services: parsed.services ?? [],
    slides: parsed.slides?.length ? parsed.slides : DEFAULT_SLIDES,
  });
}

export async function writeSiteContent(content: SiteContent) {
  const normalized = normalizeContent(content);
  await fs.writeFile(CONTENT_PATH, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  return normalized;
}

export function normalizeContent(input: SiteContent): SiteContent {
  const slidesSource = input.slides?.length ? input.slides : DEFAULT_SLIDES;
  return {
    contact: {
      email: String(input.contact?.email ?? "").trim(),
      phone: String(input.contact?.phone ?? "").trim(),
      location: String(input.contact?.location ?? "").trim(),
    },
    services: (input.services ?? []).map((service, index) => ({
      code: String(service.code ?? `SVC-${String(index + 1).padStart(2, "0")}`).trim(),
      title: String(service.title ?? "").trim(),
      text: String(service.text ?? "").trim(),
      points: (service.points ?? [])
        .map((point) => String(point).trim())
        .filter(Boolean),
    })),
    slides: slidesSource.map((slide, index) => {
      const fallback = DEFAULT_SLIDES[index] ?? DEFAULT_SLIDES[0];
      return {
        id: String(slide.id ?? fallback.id).trim() || fallback.id,
        src: String(slide.src ?? fallback.src).trim() || fallback.src,
        title: String(slide.title ?? "").trim(),
        caption: String(slide.caption ?? "").trim(),
        alt: String(slide.alt ?? slide.title ?? "").trim(),
      };
    }),
  };
}

export function validateContent(content: SiteContent): string | null {
  const { contact, services, slides } = content;
  if (!contact.email || !contact.phone || !contact.location) {
    return "Email, phone and location are required.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    return "Enter a valid contact email.";
  }
  if (!services.length) {
    return "Add at least one service.";
  }
  for (const service of services) {
    if (!service.code || !service.title || !service.text) {
      return "Each service needs a code, title and description.";
    }
    if (!service.points.length) {
      return `Add at least one bullet for ${service.title || service.code}.`;
    }
  }
  if (!slides.length) {
    return "Add at least one hero slide.";
  }
  for (const slide of slides) {
    if (!slide.src || !slide.title || !slide.caption) {
      return "Each slide needs an image, title and caption.";
    }
  }
  return null;
}

export function extensionForMime(mime: string) {
  switch (mime) {
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    default:
      return null;
  }
}
