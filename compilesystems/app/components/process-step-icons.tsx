type ProcessStepIconProps = {
  step: string;
  className?: string;
};

export function ProcessStepIcon({
  step,
  className = "h-5 w-5",
}: ProcessStepIconProps) {
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

  switch (step) {
    case "01":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    case "02":
      return (
        <svg {...props}>
          <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
          <path d="M3 12.5 12 17l9-4.5" />
          <path d="M3 17.5 12 22l9-4.5" />
        </svg>
      );
    case "03":
      return (
        <svg {...props}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
          <path d="M14 4h4v4" />
        </svg>
      );
    case "04":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
