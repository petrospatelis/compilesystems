import Image from "next/image";
import { CLIENT_LAYOUT, CLIENT_LOGOS, CLIENT_WEBSITES } from "../lib/clients";
import type { Translations } from "../lib/i18n/translations";

type ClientsSectionProps = {
  labels: Translations["clients"];
};

function ExternalLinkIcon({ label }: { label: string }) {
  return (
    <span className="client-card__external-wrap">
      <span className="client-card__tooltip" role="tooltip">
        {label}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="client-card__external"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    </span>
  );
}

export function ClientsSection({ labels }: ClientsSectionProps) {
  const clientsById = Object.fromEntries(
    labels.items.map((client) => [client.id, client]),
  );

  return (
    <section className="clients-section">
      <div className="clients-section__intro">
        <h2 className="clients-section__title">{labels.title}</h2>
        <p className="clients-section__subtitle">{labels.subtitle}</p>
      </div>

      <ul className="clients-bento">
        {CLIENT_LAYOUT.map(({ id, featured }) => {
          const client = clientsById[id];
          const website = CLIENT_WEBSITES[id];
          const logo = CLIENT_LOGOS[id];
          if (!client || !website || !logo) return null;

          return (
            <li
              key={id}
              className={`client-card ${featured ? "client-card--featured" : ""}`}
            >
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${client.name} — ${labels.visitWebsite}`}
                className="client-card__link"
              >
                <div className="client-card__glow" aria-hidden />
                <div className="client-card__content">
                  <div className="client-card__top">
                    <div
                      className={`client-card__logo${id === "jpinox" ? " client-card__logo--jpinox" : ""}`}
                    >
                      <Image
                        src={logo.src}
                        alt={`${client.name} logo`}
                        width={logo.width}
                        height={logo.height}
                        className="client-card__logo-image"
                      />
                    </div>
                    <ExternalLinkIcon label={labels.visitWebsite} />
                  </div>
                  <div className="client-card__body">
                    <h3 className="client-card__name">{client.name}</h3>
                    <p className="client-card__description">
                      {client.description}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
