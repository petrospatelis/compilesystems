export const COMPANY_EMAIL = "info@compilesystems.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://compilesystems.com";

export const siteName = "Compile Systems Ltd";

export const siteLogoUrl = `${siteUrl}/logo.png`;

export const companyRegistration =
  process.env.NEXT_PUBLIC_COMPANY_REGISTRATION ?? "";

export const companyVat = process.env.NEXT_PUBLIC_COMPANY_VAT ?? "";

export type SocialLinkId = "linkedin" | "github";

export const socialLinks = [
  {
    id: "linkedin",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
  {
    id: "github",
    url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  },
].filter(
  (link): link is { id: SocialLinkId; url: string } => link.url.length > 0,
);
