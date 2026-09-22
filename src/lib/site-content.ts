import { createHmac, timingSafeEqual } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type ServiceItem = {
  code: string;
  title: string;
  text: string;
  points: string[];
};

export type SiteContent = {
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  services: ServiceItem[];
};

export const SESSION_COOKIE = "axis_admin_session";

const CONTENT_PATH = path.join(process.cwd(), "data", "site-content.json");

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
  return JSON.parse(raw) as SiteContent;
}

export async function writeSiteContent(content: SiteContent) {
  const normalized = normalizeContent(content);
  await fs.writeFile(CONTENT_PATH, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  return normalized;
}

export function normalizeContent(input: SiteContent): SiteContent {
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
  };
}

export function validateContent(content: SiteContent): string | null {
  const { contact, services } = content;
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
  return null;
}
