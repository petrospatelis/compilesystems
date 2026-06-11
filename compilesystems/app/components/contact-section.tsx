import type { ReactNode } from "react";
import type { Translations } from "../lib/i18n/translations";
import { CompanyMap } from "./company-map";
import { ContactForm } from "./contact-form";

type CompanyContact = {
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type ContactSectionProps = {
  contact: CompanyContact;
  fullAddress: string;
  mapsUrl: string;
  labels: Translations["contact"];
};

function BuildingIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-accent"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-accent"
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

type DetailItemProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function DetailItem({ icon, label, children }: DetailItemProps) {
  return (
    <div className="contact-detail">
      <div className="contact-detail__icon">{icon}</div>
      <div className="min-w-0">
        <dt className="contact-detail__label">{label}</dt>
        <dd className="contact-detail__value">{children}</dd>
      </div>
    </div>
  );
}

export function ContactSection({
  contact,
  fullAddress,
  mapsUrl,
  labels,
}: ContactSectionProps) {
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <div className="contact-section">
      <div className="contact-section__intro">
        <h2 className="contact-section__title">{labels.title}</h2>
        <p className="contact-section__subtitle">{labels.subtitle}</p>
      </div>

      <CompanyMap
        query={fullAddress}
        title={labels.mapTitle.replace("{address}", fullAddress)}
        mapsUrl={mapsUrl}
        companyName={labels.companyName}
        address={contact.address}
        city={contact.city}
        postalCode={contact.postalCode}
        country={contact.country}
        findUsLabel={labels.findUs}
        openInMapsLabel={labels.openInMaps}
      />

      <div className="contact-section__grid">
        <section className="surface-card">
          <header className="surface-card__header">
            <div className="surface-card__icon">
              <BuildingIcon />
            </div>
            <div>
              <h3 className="surface-card__title">{labels.companyName}</h3>
              <p className="surface-card__meta">
                {contact.city}, {contact.country}
              </p>
            </div>
          </header>
          <dl className="surface-card__body contact-details">
            <DetailItem icon={<PhoneIcon />} label={labels.phone}>
              <a href={phoneHref} className="contact-link">
                {contact.phone}
              </a>
            </DetailItem>
            <DetailItem icon={<PinIcon />} label={labels.address}>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {contact.address}
              </a>
            </DetailItem>
            <div className="contact-details__meta">
              <div className="contact-meta-item">
                <dt className="contact-meta-item__label">{labels.city}</dt>
                <dd className="contact-meta-item__value">{contact.city}</dd>
              </div>
              <div className="contact-meta-item">
                <dt className="contact-meta-item__label">{labels.postalCode}</dt>
                <dd className="contact-meta-item__value">{contact.postalCode}</dd>
              </div>
              <div className="contact-meta-item">
                <dt className="contact-meta-item__label">{labels.country}</dt>
                <dd className="contact-meta-item__value">{contact.country}</dd>
              </div>
            </div>
          </dl>
        </section>

        <section className="surface-card">
          <header className="surface-card__header">
            <div className="surface-card__icon">
              <MailIcon />
            </div>
            <div>
              <h3 className="surface-card__title">{labels.sendMessage}</h3>
              <p className="surface-card__meta">{labels.formIntro}</p>
            </div>
          </header>
          <div className="surface-card__body">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
