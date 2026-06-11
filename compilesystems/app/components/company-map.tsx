type CompanyMapProps = {
  query: string;
  title?: string;
};

export function CompanyMap({
  query,
  title = "Company location on Google Maps",
}: CompanyMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <iframe
        title={title}
        src={src}
        className="aspect-[16/9] w-full border-0 sm:aspect-[21/9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
