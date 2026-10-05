import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("de");

export default function GermanPage() {
  return <HomePage locale="de" />;
}
