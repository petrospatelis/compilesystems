"use client";

import { useEffect, useId, useRef, useState } from "react";
import { localeLabels, localeShortLabels, locales, type Locale } from "../lib/i18n/locales";
import { useI18n } from "./i18n-provider";

export function LanguageDropdown() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function selectLocale(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <li ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        className="btn btn-ghost gap-1.5"
      >
        <span>{localeShortLabels[locale]}</span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t.languageBar.label}
          className="absolute right-0 top-full z-50 mt-1 min-w-[9.5rem] overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/10"
        >
          {locales.map((code) => (
            <li key={code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                onClick={() => selectLocale(code)}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                  locale === code
                    ? "bg-accent font-medium text-white"
                    : "text-foreground/70 hover:bg-accent-muted/30 hover:text-foreground"
                }`}
              >
                <span>{localeLabels[code]}</span>
                <span className="text-xs text-foreground/45">
                  {localeShortLabels[code]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
