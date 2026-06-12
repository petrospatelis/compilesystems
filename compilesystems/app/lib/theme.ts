export const themes = ["dark", "light"] as const;

export type Theme = (typeof themes)[number];

export const defaultTheme: Theme = "dark";

export const THEME_STORAGE_KEY = "compile-systems-theme";

export function isTheme(value: string): value is Theme {
  return value === "dark" || value === "light";
}
