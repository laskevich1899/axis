import type { Metadata } from "next";
import { Outfit, Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axisbimsolutions.com"),
  title: "Axis BIM Solutions — Models, drawings and project setup",
  description:
    "We help owners, designers and contractors create reliable BIM models, coordinate information and turn existing buildings into accurate digital models. Based in Warsaw.",
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
