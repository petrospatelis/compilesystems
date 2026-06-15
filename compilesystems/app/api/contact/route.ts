import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "../../lib/i18n/locales";
import {
  getPhoneValidationError,
  parseContactPhone,
  PHONE_INVALID_ERROR,
  type PhoneDetails,
} from "../../lib/phone";
import { sendEmail } from "../../lib/send-email";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  locale?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isNonEmptyString(body.name)) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!isNonEmptyString(body.email) || !isValidEmail(body.email.trim())) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }

  const locale =
    typeof body.locale === "string" && isLocale(body.locale)
      ? body.locale
      : defaultLocale;

  const phone =
    typeof body.phone === "string" ? body.phone.trim() : "";

  const phoneValidationError = getPhoneValidationError(phone, locale);
  if (phoneValidationError) {
    return NextResponse.json({ error: phoneValidationError }, { status: 400 });
  }

  const phoneDetails: PhoneDetails | null = phone
    ? parseContactPhone(phone, locale)
    : null;

  if (phone && !phoneDetails) {
    return NextResponse.json({ error: PHONE_INVALID_ERROR }, { status: 400 });
  }

  if (!isNonEmptyString(body.message)) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const formData = new FormData();
  formData.append("name", body.name.trim());
  formData.append("email", body.email.trim());
  formData.append("phone", phoneDetails?.e164 ?? "");
  formData.append(
    "phoneDetails",
    phoneDetails ? JSON.stringify(phoneDetails) : "",
  );
  formData.append(
    "subject",
    isNonEmptyString(body.subject) ? body.subject.trim() : "",
  );
  formData.append("message", body.message.trim());

  const result = await sendEmail(formData);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
