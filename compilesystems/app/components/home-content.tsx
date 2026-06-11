"use client";

import { CompanyMap } from "./company-map";
import { ContactForm } from "./contact-form";
import { HeroBackgroundSlider } from "./hero-background-slider";
import { useI18n } from "./i18n-provider";
import { LanguageDropdown } from "./language-dropdown";
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
  { href: "#home", key: "home" as const },
  { href: "#services", key: "services" as const },
  { href: "#profile", key: "profile" as const },
  { href: "#contact", key: "contact" as const },
];

export function HomeContent() {
  const { t } = useI18n();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <SmoothScrollLink
            href="#home"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Compile Systems<span className="text-accent">.</span>
          </SmoothScrollLink>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navHrefs.map(({ href, key }) => (
              <li key={href}>
                <SmoothScrollLink
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent-muted/50 hover:text-foreground"
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
              <SmoothScrollLink
                href="#services"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]"
              >
                {t.hero.ctaServices}
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#profile"
                className="inline-flex h-12 items-center rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:bg-accent-muted/30 active:scale-[0.98]"
              >
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
              {t.services.items.map(({ title, description }) => (
                <li
                  key={title}
                  className="group rounded-2xl border border-border bg-surface p-8 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                >
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">
                    {description}
                  </p>
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

        <ScrollRevealSection id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="mb-12">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.contact.findUs}
                </h3>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition hover:opacity-80"
                >
                  {t.contact.openInMaps}
                </a>
              </div>
              <CompanyMap
                query={companyFullAddress}
                title={t.contact.mapTitle.replace("{address}", companyFullAddress)}
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.contact.companyName}
                </h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-sm font-medium text-foreground/50">
                      {t.contact.phone}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${companyContact.phone.replace(/\s/g, "")}`}
                        className="text-foreground transition hover:text-accent"
                      >
                        {companyContact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground/50">
                      {t.contact.address}
                    </dt>
                    <dd className="mt-1 text-foreground">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-accent"
                      >
                        {companyContact.address}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground/50">
                      {t.contact.city}
                    </dt>
                    <dd className="mt-1 text-foreground">
                      {companyContact.city}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground/50">
                      {t.contact.postalCode}
                    </dt>
                    <dd className="mt-1 text-foreground">
                      {companyContact.postalCode}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-foreground/50">
                      {t.contact.country}
                    </dt>
                    <dd className="mt-1 text-foreground">
                      {companyContact.country}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.contact.sendMessage}
                </h3>
                <p className="mt-2 text-sm text-foreground/60">
                  {t.contact.formIntro}
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </ScrollRevealSection>
      </main>

      <ScrollToTop />

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-foreground/50">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <p className="font-mono text-xs text-foreground/40">
            {t.footer.tagline}
          </p>
        </div>
      </footer>
    </>
  );
}
