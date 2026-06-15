import { readFileSync } from "node:fs";
import { join } from "node:path";

export const EMAIL_LOGO_CONTENT_ID = "compile-systems-logo";

let cachedLogoBase64: string | undefined;

export function getEmailLogoBase64(): string {
  if (!cachedLogoBase64) {
    const logoPath = join(process.cwd(), "public", "logo.png");
    cachedLogoBase64 = readFileSync(logoPath).toString("base64");
  }

  return cachedLogoBase64;
}

export function getEmailLogoCidSrc(): string {
  return `cid:${EMAIL_LOGO_CONTENT_ID}`;
}
