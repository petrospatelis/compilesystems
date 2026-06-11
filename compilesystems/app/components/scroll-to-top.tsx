"use client";

import { useEffect, useState } from "react";
import { HEADER_OFFSET, smoothScrollTo } from "../lib/smooth-scroll";
import { useI18n } from "./i18n-provider";

const BOTTOM_THRESHOLD = 120;

function isNearPageBottom() {
  return (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - BOTTOM_THRESHOLD
  );
}

export function ScrollToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(isNearPageBottom());
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  function scrollToTop() {
    const home = document.getElementById("home");
    if (home) {
      smoothScrollTo(home, {
        offset: HEADER_OFFSET,
        onComplete: () => history.replaceState(null, "", "#home"),
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label={t.scrollToTop}
      onClick={scrollToTop}
      className={`btn btn-icon fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
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
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
