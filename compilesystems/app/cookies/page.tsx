import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Compile Systems Ltd uses cookies and similar technologies on this website.",
  alternates: {
    canonical: `${siteUrl}/cookies`,
  },
};

export default function CookiesPage() {
  return <LegalPage document="cookies" />;
}
