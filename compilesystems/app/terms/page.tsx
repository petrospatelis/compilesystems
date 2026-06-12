import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using the Compile Systems Ltd website.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return <LegalPage document="terms" />;
}
