type ProfileStatIconProps = {
  index: number;
  className?: string;
};

export function ProfileStatIcon({
  index,
  className = "h-4 w-4",
}: ProfileStatIconProps) {
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

  switch (index) {
    case 0:
      return (
        <svg {...props}>
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );
    case 1:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 2:
      return (
        <svg {...props}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="m12.83 2.18 2 3.5" />
          <path d="M14.5 5.5h5.27a2 2 0 0 1 1.86 2.74l-4.82 12.4a2 2 0 0 1-1.86 1.26H6.38a2 2 0 0 1-1.86-1.26L.7 8.24A2 2 0 0 1 2.56 5.5H7.5" />
          <path d="M14.5 5.5 12 2 9.5 5.5" />
          <path d="M9.5 5.5 12 22l2.5-16.5" />
        </svg>
      );
  }
}
