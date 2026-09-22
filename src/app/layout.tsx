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
  title: "Axis BIM Solutions — Model management, documents & process adoption",
  description:
    "Axis BIM Solutions helps owners, architects, and contractors run live project models, produce construction documents, and embed BIM into the organization. Based in Warsaw.",
  keywords: [
    "BIM",
    "VDC",
    "Axis BIM Solutions",
    "model management",
    "construction documents",
    "BIM adoption",
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
