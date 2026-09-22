import type { Metadata } from "next";
import { Outfit, Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axis BIM Solutions — Model coordination, drawings & BIM implementation",
  description:
    "Engineering-focused BIM practice in Warsaw: multidisciplinary model coordination, construction drawings from the model and BIM process implementation.",
  keywords: [
    "BIM",
    "Axis BIM Solutions",
    "model coordination",
    "clash detection",
    "construction drawings",
    "Warsaw",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sourceSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
