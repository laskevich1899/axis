import type { Metadata } from "next";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

export function pageMetadata(locale: Locale): Metadata {
  const copy = getMessages(locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: localePath(locale),
      languages: {
        en: "/",
        pl: "/pl/",
        de: "/de/",
        "x-default": "/",
      },
    },
  };
}
