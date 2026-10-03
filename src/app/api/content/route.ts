import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  SESSION_COOKIE,
  isValidSessionToken,
  normalizeContent,
  readSiteContent,
  validateContent,
  writeSiteContent,
  type SiteContent,
} from "@/lib/site-content";

export async function GET() {
  const content = await readSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const jar = await cookies();
  if (!isValidSessionToken(jar.get(SESSION_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: SiteContent;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const normalized = normalizeContent(body);
  const error = validateContent(normalized);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const saved = await writeSiteContent(normalized);
  revalidatePath("/");
  revalidatePath("/admin");
  return NextResponse.json(saved);
}
