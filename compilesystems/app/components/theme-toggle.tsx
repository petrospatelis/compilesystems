"use client";

import { useEffect, useId, useState } from "react";
import { useI18n } from "./i18n-provider";
import { useTheme } from "./theme-provider";

function SunIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const tooltipId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? t.themeToggle.switchToLight : t.themeToggle.switchToDark;

  return (
    <span className="theme-toggle">
      <button
        type="button"
        className="btn btn-ghost site-header__theme-toggle"
        onClick={toggleTheme}
        aria-label={mounted ? label : t.themeToggle.switchToLight}
        aria-describedby={mounted ? tooltipId : undefined}
        aria-pressed={mounted ? !isDark : false}
      >
        {mounted && isDark ? <SunIcon /> : <MoonIcon />}
      </button>
      {mounted && (
        <span id={tooltipId} className="theme-toggle__tooltip" role="tooltip">
          {label}
        </span>
      )}
    </span>
  );
}
