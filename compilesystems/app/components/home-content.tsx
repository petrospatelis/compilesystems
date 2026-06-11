"use client";

import { ClientsSection } from "./clients-section";
import { ContactSection } from "./contact-section";
import { HeroBackgroundSlider } from "./hero-background-slider";
import { useI18n } from "./i18n-provider";
import { Logo } from "./logo";
import { ServiceIcon } from "./service-icons";
import { SiteHeader } from "./site-header";
import { useActiveSection } from "../hooks/use-active-section";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { ScrollToTop } from "./scroll-to-top";
import { SmoothScrollLink } from "./smooth-scroll-link";

const companyContact = {
  phone: "+44 20 7946 0958",
  address: "42 Tech Lane, Floor 3",
  city: "London",
  postalCode: "EC2A 4NE",
  country: "United Kingdom",
} as const;

const companyFullAddress = [
  companyContact.address,
  companyContact.city,
  companyContact.postalCode,
  companyContact.country,
].join(", ");

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyFullAddress)}`;

const navHrefs = [
  { href: "#home", id: "home", key: "home" as const },
  { href: "#services", id: "services", key: "services" as const },
  { href: "#profile", id: "profile", key: "profile" as const },
  { href: "#clients", id: "clients", key: "clients" as const },
  { href: "#contact", id: "contact", key: "contact" as const },
] as const;

const navSectionIds = navHrefs.map(({ id }) => id);

export function HomeContent() {
  const { t } = useI18n();
  const activeSection = useActiveSection(navSectionIds);

  return (
    <>
      <SiteHeader
        activeSection={activeSection}
        navItems={navHrefs.map(({ href, id, key }) => ({
          href,
          id,
          label: t.nav[key],
        }))}
      />

      <main className="min-w-0 flex-1">
        <ScrollRevealSection
          id="home"
          immediate
          className="relative overflow-hidden border-b border-border/60"
        >
          <HeroBackgroundSlider />
          <div className="page-container section-y hero-section">
            <p className="hero-section__badge">{t.hero.badge}</p>
            <h1 className="hero-section__title">
              {t.hero.titleBefore}
              <span className="text-accent">{t.hero.titleAccent}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="hero-section__description">{t.hero.description}</p>
            <div className="hero-section__actions">
              <SmoothScrollLink href="#services" className="btn btn-primary">
                {t.hero.ctaServices}
              </SmoothScrollLink>
              <SmoothScrollLink href="#profile" className="btn btn-secondary">
                {t.hero.ctaAbout}
              </SmoothScrollLink>
            </div>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="services"
          className="border-b border-border/60 section-y"
        >
          <div className="page-container">
            <div className="section-intro">
              <h2 className="section-title">{t.services.title}</h2>
              <p className="section-subtitle">{t.services.subtitle}</p>
            </div>
            <ul className="services-grid">
              {t.services.items.map(({ id, title, description }) => (
                <li key={id} className="service-card group">
                  <div className="service-card__icon" aria-hidden>
                    <ServiceIcon id={id} />
                  </div>
                  <h3 className="service-card__title">{title}</h3>
                  <p className="service-card__description">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="profile"
          className="border-b border-border/60 section-y"
        >
          <div className="page-container profile-grid">
            <div>
              <h2 className="section-title">{t.profile.title}</h2>
              <p className="section-body">{t.profile.paragraphs[0]}</p>
              <p className="section-body section-body--follow">{t.profile.paragraphs[1]}</p>
            </div>
            <dl className="profile-stats">
              {t.profile.stats.map(({ label, value }) => (
                <div key={label} className="profile-stat">
                  <dt className="profile-stat__label">{label}</dt>
                  <dd className="profile-stat__value">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="clients"
          className="border-b border-border/60 section-y"
        >
          <div className="page-container">
            <ClientsSection labels={t.clients} />
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection id="contact" className="section-y">
          <div className="page-container">
            <ContactSection
              contact={companyContact}
              fullAddress={companyFullAddress}
              mapsUrl={googleMapsUrl}
              labels={t.contact}
            />
          </div>
        </ScrollRevealSection>
      </main>

      <ScrollToTop />

      <footer className="site-footer">
        <div className="page-container site-footer__inner">
          <p className="site-footer__text">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
        </div>
      </footer>
    </>
  );
}
