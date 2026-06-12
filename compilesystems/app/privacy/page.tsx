import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Compile Systems Ltd collects, uses, and protects your personal information.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return <LegalPage document="privacy" />;
}
