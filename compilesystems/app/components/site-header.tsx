"use client";

import { useEffect, useId, useState } from "react";
import { localeLabels, locales, type Locale } from "../lib/i18n/locales";
import { useI18n } from "./i18n-provider";
import { LanguageDropdown } from "./language-dropdown";
import { Logo } from "./logo";
import { SmoothScrollLink } from "./smooth-scroll-link";
import { ThemeToggle } from "./theme-toggle";

type NavItem = {
  href: string;
  id: string;
  label: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  activeSection: string;
};

const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  el: "EL",
  fil: "FIL",
};

const DESKTOP_NAV_MIN = 1024;

export function SiteHeader({ navItems, activeSection }: SiteHeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= DESKTOP_NAV_MIN) setMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="page-container site-header__bar" aria-label={t.navMenu.main}>
        <SmoothScrollLink
          href="#home"
          className="site-header__brand"
          onClick={closeMenu}
        >
          <Logo
            showSlogan
            slogan={t.brand.slogan}
            className="site-header__brand-full"
          />
          <Logo showWordmark className="site-header__brand-compact" iconClassName="h-8 w-8" />
        </SmoothScrollLink>

        <ul className="site-header__desktop-nav">
          {navItems.map(({ href, id, label }) => (
            <li key={href}>
              <SmoothScrollLink
                href={href}
                aria-current={activeSection === id ? "page" : undefined}
                className={`btn-nav ${
                  activeSection === id ? "btn-nav-active" : "btn-nav-inactive"
                }`}
              >
                {label}
              </SmoothScrollLink>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <LanguageDropdown />
        </ul>

        <div className="site-header__actions">
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-ghost site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? t.navMenu.close : t.navMenu.open}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={`site-header__mobile-panel ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-header__mobile-panel-inner">
          <ul className="site-header__mobile-nav">
            {navItems.map(({ href, id, label }) => (
              <li key={href}>
                <SmoothScrollLink
                  href={href}
                  aria-current={activeSection === id ? "page" : undefined}
                  onClick={closeMenu}
                  className={`site-header__mobile-link ${
                    activeSection === id
                      ? "site-header__mobile-link--active"
                      : ""
                  }`}
                >
                  {label}
                </SmoothScrollLink>
              </li>
            ))}
          </ul>

          <div className="site-header__mobile-lang">
            <p className="site-header__mobile-lang-label">{t.languageBar.label}</p>
            <div className="site-header__mobile-lang-options" role="group">
              {locales.map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={locale === code}
                  onClick={() => setLocale(code)}
                  className={`site-header__mobile-lang-btn ${
                    locale === code ? "is-active" : ""
                  }`}
                >
                  <span>{localeShortLabels[code]}</span>
                  <span className="site-header__mobile-lang-name">
                    {localeLabels[code]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          aria-label={t.navMenu.close}
          className="site-header__backdrop"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
