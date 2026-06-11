import type { ServiceIconId } from "../lib/services";

type ServiceIconProps = {
  id: ServiceIconId;
  className?: string;
};

export function ServiceIcon({ id, className = "h-5 w-5" }: ServiceIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (id) {
    case "customSoftware":
      return (
        <svg {...props}>
          <path d="m8 9-4 3 4 3" />
          <path d="m16 15 4-3-4-3" />
          <path d="M14.5 4 9.5 20" />
        </svg>
      );
    case "systemArchitecture":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
          <path d="M6.5 10v1.5L12 15.5" />
          <path d="M17.5 10v1.5L12 15.5" />
        </svg>
      );
    case "cloudDevops":
      return (
        <svg {...props}>
          <path d="M6.5 19h11a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.8 1.6A3.5 3.5 0 0 0 6.5 19Z" />
          <path d="M12 12v4" />
          <path d="M10 14h4" />
        </svg>
      );
    case "technicalConsulting":
      return (
        <svg {...props}>
          <path d="M12 3 2 8l10 5 10-5-10-5Z" />
          <path d="M2 13l10 5 10-5" />
          <path d="M2 18l10 5 10-5" />
        </svg>
      );
  }
}
