"use client";

import Link from "next/link";
import type { LegalDocument } from "../lib/i18n/translations";
import { useI18n } from "./i18n-provider";
import { LanguageDropdown } from "./language-dropdown";
import { Logo } from "./logo";
import { SiteFooter } from "./site-footer";
import { ThemeToggle } from "./theme-toggle";

type LegalPageProps = {
  document: "privacy" | "terms" | "cookies";
};

function LegalDocumentContent({ content }: { content: LegalDocument }) {
  return (
    <article className="legal-document">
      <header className="legal-document__header">
        <h1 className="legal-document__title">{content.title}</h1>
        <p className="legal-document__intro">{content.intro}</p>
      </header>

      <div className="legal-document__sections">
        {content.sections.map((section) => (
          <section key={section.title} className="legal-document__section">
            <h2 className="legal-document__section-title">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="legal-document__paragraph">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

export function LegalPage({ document }: LegalPageProps) {
  const { t } = useI18n();
  const content =
    document === "privacy"
      ? t.legal.privacy
      : document === "terms"
        ? t.legal.terms
        : t.legal.cookies;

  return (
    <>
      <header className="legal-page-header">
        <div className="page-container legal-page-header__inner">
          <Link href="/" className="legal-page-header__brand">
            <Logo showWordmark />
          </Link>

          <div className="legal-page-header__actions">
            <ul className="legal-page-header__utilities">
              <LanguageDropdown />
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="legal-page-main">
        <div className="page-container legal-page-main__inner">
          <Link href="/" className="legal-page-main__back">
            ← {t.legal.backToHome}
          </Link>
          <p className="legal-page-main__updated">{t.legal.lastUpdated}</p>
          <LegalDocumentContent content={content} />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
