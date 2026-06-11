type LogoProps = {
  showSlogan?: boolean;
  showWordmark?: boolean;
  slogan?: string;
  className?: string;
  iconClassName?: string;
};

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="48" height="48" rx="12" className="fill-accent-muted" />
      <path
        d="M19 15 11 24l8 9"
        className="stroke-foreground"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 33 4-18"
        className="stroke-accent"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m29 15 8 9-8 9"
        className="stroke-accent"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  showSlogan = false,
  showWordmark = true,
  slogan = "Your vision. Our code.",
  className = "",
  iconClassName = "h-9 w-9",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={iconClassName} />
      {(showWordmark || showSlogan) && (
        <span className="flex min-w-0 flex-col leading-tight">
          {showWordmark && (
            <span className="truncate text-base font-semibold tracking-tight text-foreground min-[480px]:text-lg">
              Compile Systems<span className="text-accent">.</span>
            </span>
          )}
          {showSlogan && (
            <span className="text-[11px] font-medium tracking-wide text-foreground/55 sm:text-xs">
              <span className="text-accent">{slogan}</span>
            </span>
          )}
        </span>
      )}
    </span>
  );
}
