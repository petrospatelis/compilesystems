export const CLIENT_WEBSITES = {
  sparxIQ: "https://www.sparxiq.com",
  idea: "https://www.idea4industry.com",
  hubbell: "https://www.hubbell.com",
  siemens: "https://www.siemens.com",
  jpinox: "https://www.jpinoxsystems.gr",
} as const;

export const CLIENT_LOGOS: Record<
  keyof typeof CLIENT_WEBSITES,
  { src: string; width: number; height: number }
> = {
  sparxIQ: { src: "/clients/sparxIQ.png", width: 128, height: 128 },
  idea: { src: "/clients/idea.png", width: 128, height: 128 },
  hubbell: { src: "/clients/hubbell.png", width: 128, height: 128 },
  siemens: { src: "/clients/siemens.png", width: 128, height: 128 },
  jpinox: { src: "/clients/jpinox.png", width: 128, height: 128 },
};

export const CLIENT_LAYOUT = [
  { id: "sparxIQ", featured: true },
  { id: "idea", featured: true },
  { id: "hubbell", featured: false },
  { id: "siemens", featured: false },
  { id: "jpinox", featured: false },
] as const;
