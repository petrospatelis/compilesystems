import { COMPANY_EMAIL, siteName, siteUrl } from "../lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  email: COMPANY_EMAIL,
  telephone: "+306936696835",
  logo: `${siteUrl}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Dromos, 4C, Episkopi",
    addressLocality: "Limassol",
    postalCode: "4620",
    addressCountry: "CY",
  },
  sameAs: [],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
