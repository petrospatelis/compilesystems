import { logoMarkPaths, logoMarkStroke, logoMarkViewBox } from "../lib/logo-mark";

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
      viewBox={logoMarkViewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="48" height="48" rx="12" className="fill-accent-muted" />
      <path
        d={logoMarkPaths.left}
        className="stroke-foreground"
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
        strokeLinejoin={logoMarkStroke.linejoin}
      />
      <path
        d={logoMarkPaths.center}
        className="stroke-accent"
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
      />
      <path
        d={logoMarkPaths.right}
        className="stroke-accent"
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
        strokeLinejoin={logoMarkStroke.linejoin}
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
