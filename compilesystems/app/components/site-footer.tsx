"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { getGoogleMapsSearchUrl } from "../lib/company-location";
import { localeLabels, locales } from "../lib/i18n/locales";
import type { SocialLinkId } from "../lib/site";
import {
  companyRegistration,
  companyVat,
  socialLinks,
} from "../lib/site";
import { useI18n } from "./i18n-provider";
import { Logo } from "./logo";
import { ScrollToTop } from "./scroll-to-top";
import { SmoothScrollLink } from "./smooth-scroll-link";

const footerNavItems = [
  { href: "/#home", key: "home" as const },
  { href: "/#services", key: "services" as const },
  { href: "/#profile", key: "profile" as const },
  { href: "/#clients", key: "clients" as const },
  { href: "/#contact", key: "contact" as const },
];

const socialLabelKeys: Record<SocialLinkId, "linkedin" | "github"> = {
  linkedin: "linkedin",
  github: "github",
};

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function SocialIcon({ id }: { id: SocialLinkId }) {
  if (id === "linkedin") return <LinkedInIcon />;
  return <GitHubIcon />;
}

function EmailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-accent"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-accent"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-accent"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-accent"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
}

function FooterContactItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="site-footer__contact-item">
      <span className="site-footer__contact-icon">{icon}</span>
      <span className="site-footer__contact-content">{children}</span>
    </li>
  );
}

export function SiteFooter() {
  const { t, locale, setLocale } = useI18n();
  const { companyContact } = t;
  const phoneHref = `tel:${companyContact.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${companyContact.email}`;
  const fullAddress = [
    companyContact.address,
    companyContact.city,
    companyContact.postalCode,
    companyContact.country,
  ].join(", ");
  const mapsUrl = getGoogleMapsSearchUrl();
  const legalDetails = [
    companyRegistration
      ? t.footer.registration.replace("{number}", companyRegistration)
      : null,
    companyVat ? t.footer.vat.replace("{number}", companyVat) : null,
  ].filter(Boolean);

  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__brand-link">
            <Logo
              showSlogan
              slogan={t.brand.slogan}
              className="site-header__brand-full"
            />
            <Logo
              showWordmark
              className="site-header__brand-compact"
              iconClassName="h-8 w-8"
            />
          </Link>
        </div>

        <SmoothScrollLink href="/#contact" className="site-footer__cta">
          {t.footer.cta}
        </SmoothScrollLink>

        {socialLinks.length > 0 && (
          <div className="site-footer__social" aria-label={t.footer.followUs}>
            {socialLinks.map(({ id, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label={t.footer[socialLabelKeys[id]]}
              >
                <SocialIcon id={id} />
              </a>
            ))}
          </div>
        )}

        <div className="site-footer__columns">
          <nav aria-label={t.footer.navigation} className="site-footer__column">
            <h2 className="site-footer__heading">{t.footer.navigation}</h2>
            <ul className="site-footer__links">
              {footerNavItems.map(({ href, key }) => (
                <li key={key}>
                  <SmoothScrollLink href={href} className="site-footer__link">
                    {t.nav[key]}
                  </SmoothScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">{t.footer.contact}</h2>
            <ul className="site-footer__links">
              <FooterContactItem icon={<EmailIcon />}>
                <a href={emailHref} className="site-footer__link">
                  {companyContact.email}
                </a>
              </FooterContactItem>
              <FooterContactItem icon={<PhoneIcon />}>
                <a href={phoneHref} className="site-footer__link">
                  {companyContact.phone}
                </a>
              </FooterContactItem>
              <FooterContactItem icon={<PinIcon />}>
                <span className="site-footer__address">{fullAddress}</span>
              </FooterContactItem>
              <FooterContactItem icon={<MapIcon />}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  {t.contact.openInMaps}
                </a>
              </FooterContactItem>
            </ul>
          </div>

          <nav aria-label={t.footer.legal} className="site-footer__column">
            <h2 className="site-footer__heading">{t.footer.legal}</h2>
            <ul className="site-footer__links">
              <li>
                <Link href="/privacy" className="site-footer__link">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="site-footer__link">
                  {t.footer.termsOfUse}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="site-footer__link">
                  {t.footer.cookiePolicy}
                </Link>
              </li>
            </ul>
          </nav>

          <div
            aria-label={t.footer.language}
            className="site-footer__column site-footer__column--language"
          >
            <h2 className="site-footer__heading">{t.footer.language}</h2>
            <ul className="site-footer__language-options">
              {locales.map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`site-footer__language-btn site-footer__link${
                      locale === code ? " is-active" : ""
                    }`}
                    aria-current={locale === code ? "true" : undefined}
                    aria-label={localeLabels[code]}
                  >
                    {localeLabels[code]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-row">
          <p className="site-footer__text">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <ScrollToTop />
        </div>
        {legalDetails.length > 0 && (
          <p className="site-footer__meta">
            {legalDetails.join(" · ")}
          </p>
        )}
      </div>
    </footer>
  );
}
