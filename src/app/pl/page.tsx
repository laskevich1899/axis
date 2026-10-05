import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("pl");

export default function PolishPage() {
  return <HomePage locale="pl" />;
}
