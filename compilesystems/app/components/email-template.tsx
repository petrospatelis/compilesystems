import * as React from "react";
import type { PhoneDetails } from "../lib/phone";
import { formatPhoneRegionLabel, phoneTelHref } from "../lib/phone";
import { siteName, siteUrl } from "../lib/site";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  phoneDetails: PhoneDetails | null;
  subject: string;
  message: string;
  logoSrc: string;
}

function buildReplyMailto(recipientEmail: string, replySubject: string): string {
  const params = new URLSearchParams({ subject: replySubject });
  return `mailto:${recipientEmail}?${params.toString()}`;
}

const palette = {
  page: "#f1f5f9",
  card: "#ffffff",
  heading: "#0f172a",
  body: "#334155",
  muted: "#64748b",
  accent: "#2563eb",
  accentSoft: "#dbeafe",
  border: "#e2e8f0",
  message: "#f8fafc",
  footer: "#94a3b8",
} as const;

const fontFamily =
  '"Plus Jakarta Sans", Avenir, "Avenir Next", "Avenir Next LT Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const fontLink =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";

const styles = {
  page: {
    margin: 0,
    padding: "32px 16px",
    backgroundColor: palette.page,
    color: palette.body,
    fontFamily,
    fontSize: "16px",
    lineHeight: 1.6,
    WebkitFontSmoothing: "antialiased" as const,
    MozOsxFontSmoothing: "grayscale" as const,
  },
  card: {
    maxWidth: "560px",
    margin: "0 auto",
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: "16px",
    overflow: "hidden" as const,
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
  },
  header: {
    padding: "32px 36px 28px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1d4ed8 100%)",
  },
  brandTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
  },
  brandLogoCell: {
    width: "56px",
    padding: "0 24px 0 0",
    verticalAlign: "middle" as const,
  },
  brandTextCell: {
    padding: 0,
    verticalAlign: "middle" as const,
  },
  logoImage: {
    display: "block" as const,
    width: "48px",
    height: "48px",
    borderRadius: "12px",
  },
  brandName: {
    margin: 0,
    padding: 0,
    color: "#f8fafc",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.25,
  },
  brandTagline: {
    margin: "10px 0 0",
    padding: 0,
    color: "#bfdbfe",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.02em",
    lineHeight: 1.5,
  },
  badge: {
    display: "inline-block" as const,
    margin: "20px 32px 0",
    padding: "6px 12px",
    borderRadius: "999px",
    backgroundColor: palette.accentSoft,
    color: palette.accent,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  content: {
    padding: "24px 32px 32px",
  },
  title: {
    margin: "0 0 10px",
    color: palette.heading,
    fontSize: "26px",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.2,
  },
  intro: {
    margin: "0 0 24px",
    color: palette.muted,
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: 1.65,
  },
  fieldGrid: {
    width: "100%",
    borderCollapse: "separate" as const,
    borderSpacing: 0,
  },
  fieldLabel: {
    padding: "0 0 6px",
    color: palette.muted,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
  fieldValue: {
    padding: "0 0 18px",
    color: palette.body,
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: 1.55,
  },
  fieldLink: {
    color: palette.accent,
    fontWeight: 600,
    textDecoration: "none",
  },
  phoneRegion: {
    margin: "6px 0 0",
    color: palette.muted,
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: 1.45,
  },
  messageBox: {
    margin: "4px 0 28px",
    padding: "18px 20px",
    backgroundColor: palette.message,
    border: `1px solid ${palette.border}`,
    borderRadius: "12px",
    color: palette.body,
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: 1.75,
    whiteSpace: "pre-wrap" as const,
    wordBreak: "break-word" as const,
  },
  buttonWrap: {
    margin: 0,
  },
  button: {
    display: "inline-block" as const,
    padding: "13px 24px",
    borderRadius: "999px",
    backgroundColor: palette.accent,
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.01em",
    textDecoration: "none",
  },
  footer: {
    padding: "20px 32px 24px",
    borderTop: `1px solid ${palette.border}`,
    backgroundColor: "#fcfdff",
  },
  footerText: {
    margin: 0,
    color: palette.footer,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1.6,
    textAlign: "center" as const,
  },
  footerLink: {
    color: palette.accent,
    fontWeight: 600,
    textDecoration: "none",
  },
} as const;

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <>
      <tr>
        <td style={styles.fieldLabel}>{label}</td>
      </tr>
      <tr>
        <td style={styles.fieldValue}>{value}</td>
      </tr>
    </>
  );
}

export function EmailTemplate({
  name,
  email,
  phone,
  phoneDetails,
  subject,
  message,
  logoSrc,
}: EmailTemplateProps) {
  const preview = `${name} sent a message via ${siteName}.`;
  const replySubject = subject.trim()
    ? `Re: ${subject.trim()}`
    : `Re: Your message to ${siteName}`;
  const replyHref = buildReplyMailto(email.trim(), replySubject);
  const phoneDisplay = phoneDetails?.international ?? phone.trim();
  const phoneRegion = phoneDetails ? formatPhoneRegionLabel(phoneDetails) : null;
  const phoneLink = phoneDetails?.e164 ?? phone.trim();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New contact message</title>
        <link href={fontLink} rel="stylesheet" />
      </head>
      <body style={styles.page}>
        <div
          style={{
            display: "none",
            overflow: "hidden",
            lineHeight: "1px",
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
          }}
        >
          {preview}
        </div>

        <div style={styles.card}>
          <div style={styles.header}>
            <table
              role="presentation"
              style={styles.brandTable}
              cellPadding={0}
              cellSpacing={0}
            >
              <tbody>
                <tr>
                  <td style={styles.brandLogoCell}>
                    <img
                      src={logoSrc}
                      alt={`${siteName} logo`}
                      width={48}
                      height={48}
                      style={styles.logoImage}
                    />
                  </td>
                  <td style={styles.brandTextCell}>
                    <p style={styles.brandName}>{siteName}</p>
                    <p style={styles.brandTagline}>Your vision. Our code.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={styles.badge}>New contact message</div>

          <div style={styles.content}>
            <h1 style={styles.title}>Message from {name}</h1>
            <p style={styles.intro}>
              Someone reached out through the website contact form. Reply directly
              to continue the conversation.
            </p>

            <table role="presentation" style={styles.fieldGrid} cellPadding={0} cellSpacing={0}>
              <tbody>
                <DetailRow label="From" value={name} />
                <DetailRow
                  label="Email"
                  value={
                    <a href={buildReplyMailto(email.trim(), replySubject)} style={styles.fieldLink}>
                      {email}
                    </a>
                  }
                />
                <DetailRow
                  label="Phone"
                  value={
                    phoneDisplay ? (
                      <>
                        <a href={phoneTelHref(phoneLink)} style={styles.fieldLink}>
                          {phoneDisplay}
                        </a>
                        {phoneRegion ? (
                          <p style={styles.phoneRegion}>{phoneRegion}</p>
                        ) : null}
                      </>
                    ) : (
                      "Not provided"
                    )
                  }
                />
                {subject.trim() ? (
                  <DetailRow label="Subject" value={subject.trim()} />
                ) : null}
                <DetailRow
                  label="Message"
                  value={<div style={styles.messageBox}>{message}</div>}
                />
              </tbody>
            </table>

            <p style={styles.buttonWrap}>
              <a href={replyHref} style={styles.button}>
                Reply to {name.split(" ")[0] || name}
              </a>
            </p>
          </div>

          <div style={styles.footer}>
            <p style={styles.footerText}>
              Sent from the contact form at{" "}
              <a href={siteUrl} style={styles.footerLink}>
                {siteUrl.replace(/^https?:\/\//, "")}
              </a>
              .
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
