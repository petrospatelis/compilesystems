type CompanyMapProps = {
  query: string;
  title: string;
  mapsUrl: string;
  companyName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  findUsLabel: string;
  openInMapsLabel: string;
};

function MapPinIcon() {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function CompanyMap({
  query,
  title,
  mapsUrl,
  companyName,
  address,
  city,
  postalCode,
  country,
  findUsLabel,
  openInMapsLabel,
}: CompanyMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const locationLine = `${city}, ${postalCode}, ${country}`;

  return (
    <section className="map-section">
      <div className="map-section__glow" aria-hidden />
      <div className="map-section__card">
        <div className="map-section__header">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-muted">
              <MapPinIcon />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {findUsLabel}
              </h3>
              <p className="truncate text-sm text-foreground/55">{locationLine}</p>
            </div>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary shrink-0 gap-2 px-4 text-sm"
          >
            <span className="hidden sm:inline">{openInMapsLabel}</span>
            <span className="sm:hidden">Maps</span>
            <ExternalLinkIcon />
          </a>
        </div>

        <div className="map-section__frame">
          <iframe
            title={title}
            src={src}
            className="map-section__iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-section__fade" aria-hidden />
          <div className="map-section__overlay">
            <div className="map-section__info">
              <p className="text-sm font-semibold text-foreground">
                {companyName}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                {address}
                <br />
                {locationLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
