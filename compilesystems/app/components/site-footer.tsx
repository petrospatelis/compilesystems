"use client";

import Link from "next/link";
import { useI18n } from "./i18n-provider";
import { Logo } from "./logo";
import { SmoothScrollLink } from "./smooth-scroll-link";

const footerNavItems = [
  { href: "/#home", key: "home" as const },
  { href: "/#services", key: "services" as const },
  { href: "/#profile", key: "profile" as const },
  { href: "/#clients", key: "clients" as const },
  { href: "/#contact", key: "contact" as const },
];

export function SiteFooter() {
  const { t } = useI18n();
  const phoneHref = `tel:${t.companyContact.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${t.companyContact.email}`;

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
              <li>
                <a href={emailHref} className="site-footer__link">
                  {t.companyContact.email}
                </a>
              </li>
              <li>
                <a href={phoneHref} className="site-footer__link">
                  {t.companyContact.phone}
                </a>
              </li>
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
            </ul>
          </nav>
        </div>

        <p className="site-footer__text text-center">
          {t.footer.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}
        </p>
      </div>
    </footer>
  );
}
