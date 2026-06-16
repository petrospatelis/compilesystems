export const logoMarkViewBox = "0 0 48 48";

export const logoMarkPaths = {
  left: "M19 15 11 24l8 9",
  center: "m22 33 4-18",
  right: "m29 15 8 9-8 9",
} as const;

export const logoMarkStroke = {
  width: 3,
  linecap: "round" as const,
  linejoin: "round" as const,
};

export const logoMarkColors = {
  dark: {
    background: "#1e3a5f",
    foreground: "#f8fafc",
    accent: "#3b82f6",
  },
  light: {
    background: "#dbeafe",
    foreground: "#0f172a",
    accent: "#2563eb",
  },
} as const;
