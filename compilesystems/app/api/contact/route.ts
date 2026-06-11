import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
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

  if (!isNonEmptyString(body.message)) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const submission = {
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    subject: isNonEmptyString(body.subject) ? body.subject.trim() : undefined,
    message: body.message.trim(),
    receivedAt: new Date().toISOString(),
  };

  console.info("[contact] New message received:", submission);

  return NextResponse.json({ ok: true });
}
