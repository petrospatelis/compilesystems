export const locales = ["en", "el", "fil"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  fil: "Filipino",
};

export const LOCALE_STORAGE_KEY = "compile-systems-locale";
