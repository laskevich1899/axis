import type { Metadata } from "next";
import { Manrope, Unbounded, Geist_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "КОНТУР — BIM-модели, документация и внедрение процессов",
  description:
    "BIM-компания КОНТУР: ведение моделей проектов, создание проектной документации и внедрение BIM-процессов в структуру организаций.",
  keywords: [
    "BIM",
    "ведение моделей",
    "проектная документация",
    "внедрение BIM",
    "КОНТУР",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
