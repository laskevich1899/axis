import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  SESSION_COOKIE,
  UPLOADS_DIR,
  extensionForMime,
  isValidSessionToken,
  readSiteContent,
  writeSiteContent,
} from "@/lib/site-content";

const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const jar = await cookies();
  if (!isValidSessionToken(jar.get(SESSION_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid upload." }, { status: 400 });
  }

  const slideId = String(form.get("slideId") ?? "").trim();
  const file = form.get("file");

  if (!slideId) {
    return NextResponse.json({ error: "Missing slide id." }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Choose an image file." }, { status: 400 });
  }
  if (file.size <= 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be under 5 MB." }, { status: 400 });
  }

  const ext = extensionForMime(file.type);
  if (!ext) {
    return NextResponse.json({ error: "Use PNG, JPG, WEBP or GIF." }, { status: 400 });
  }

  const content = await readSiteContent();
  const slideIndex = content.slides.findIndex((slide) => slide.id === slideId);
  if (slideIndex < 0) {
    return NextResponse.json({ error: "Unknown slide." }, { status: 404 });
  }

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const filename = `${slideId}-${randomUUID().slice(0, 8)}.${ext}`;
  const diskPath = path.join(UPLOADS_DIR, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(diskPath, buffer);

  const previous = content.slides[slideIndex].src;
  content.slides[slideIndex] = {
    ...content.slides[slideIndex],
    src: `/uploads/slides/${filename}`,
  };
  const saved = await writeSiteContent(content);

  if (previous.startsWith("/uploads/slides/")) {
    const oldPath = path.join(process.cwd(), "public", previous.replace(/^\//, ""));
    await fs.unlink(oldPath).catch(() => undefined);
  }

  revalidatePath("/");
  revalidatePath("/admin");
  return NextResponse.json({
    slide: saved.slides[slideIndex],
    content: saved,
  });
}
