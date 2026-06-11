"use client";

import { ClientsSection } from "./clients-section";
import { ContactSection } from "./contact-section";
import { HeroBackgroundSlider } from "./hero-background-slider";
import { useI18n } from "./i18n-provider";
import { LanguageDropdown } from "./language-dropdown";
import { Logo } from "./logo";
import { ServiceIcon } from "./service-icons";
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
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <SmoothScrollLink href="#home" className="rounded-lg outline-offset-4">
            <Logo
              showSlogan
              slogan={t.brand.slogan}
              className="hidden sm:inline-flex"
            />
            <Logo
              showWordmark
              className="sm:hidden"
              iconClassName="h-8 w-8"
            />
          </SmoothScrollLink>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navHrefs.map(({ href, id, key }) => (
              <li key={href}>
                <SmoothScrollLink
                  href={href}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`btn-nav ${
                    activeSection === id ? "btn-nav-active" : "btn-nav-inactive"
                  }`}
                >
                  {t.nav[key]}
                </SmoothScrollLink>
              </li>
            ))}
            <LanguageDropdown />
          </ul>
        </nav>
      </header>

      <main>
        <ScrollRevealSection
          id="home"
          immediate
          className="relative overflow-hidden border-b border-border/60"
        >
          <HeroBackgroundSlider />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Logo
                showWordmark
                iconClassName="h-12 w-12 sm:h-14 sm:w-14"
              />
              <p className="max-w-xs text-sm font-semibold leading-snug tracking-wide text-accent sm:border-l sm:border-accent/25 sm:pl-6 sm:text-base">
                {t.brand.slogan}
              </p>
            </div>
            <p className="mb-4 inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/60">
              {t.hero.badge}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.hero.titleBefore}
              <span className="text-accent">{t.hero.titleAccent}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              {t.hero.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
          className="border-b border-border/60 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                {t.services.subtitle}
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
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
          className="border-b border-border/60 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.profile.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                {t.profile.paragraphs[0]}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                {t.profile.paragraphs[1]}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {t.profile.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <dt className="text-sm font-medium text-foreground/50">
                    {label}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection
          id="clients"
          className="border-b border-border/60 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <ClientsSection labels={t.clients} />
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
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

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center sm:text-center">
          <p className="text-sm text-foreground/50">
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
