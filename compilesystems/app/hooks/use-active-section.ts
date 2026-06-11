"use client";

import { useEffect, useState } from "react";
import { HEADER_OFFSET } from "../lib/smooth-scroll";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    function resolveActiveSection() {
      const marker = window.scrollY + HEADER_OFFSET + 24;
      let current = sectionIds[0] ?? "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) {
          current = id;
        }
      }

      setActiveSection(current);
    }

    resolveActiveSection();
    window.addEventListener("scroll", resolveActiveSection, { passive: true });
    window.addEventListener("resize", resolveActiveSection);

    return () => {
      window.removeEventListener("scroll", resolveActiveSection);
      window.removeEventListener("resize", resolveActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
