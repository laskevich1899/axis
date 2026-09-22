import type { Metadata } from "next";
import { Manrope, Unbounded, Geist_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KONTUR — BIM models, construction documents & process adoption",
  description:
    "KONTUR is a U.S. BIM firm for project model management, construction documentation, and embedding BIM processes into your organization.",
  keywords: [
    "BIM",
    "VDC",
    "model management",
    "construction documents",
    "BIM adoption",
    "KONTUR",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${unbounded.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
