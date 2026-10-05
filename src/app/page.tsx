import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("en");

export default function Page() {
  return <HomePage locale="en" />;
}
