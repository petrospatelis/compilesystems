export const locales = ["en", "el", "fil", "yue"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  fil: "Filipino",
  yue: "粵語",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  el: "EL",
  fil: "FIL",
  yue: "粵",
};

export const LOCALE_STORAGE_KEY = "compile-systems-locale";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
