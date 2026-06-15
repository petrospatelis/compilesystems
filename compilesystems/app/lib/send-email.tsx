import { EmailTemplate } from "../components/email-template";
import {
  EMAIL_LOGO_CONTENT_ID,
  getEmailLogoBase64,
  getEmailLogoCidSrc,
} from "./email-logo";
import { COMPANY_EMAIL, siteName } from "./site";
import type { PhoneDetails } from "./phone";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const toEmail = process.env.RESEND_TO_EMAIL ?? COMPANY_EMAIL;

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string | null) ?? "";
  const phoneDetailsRaw = (formData.get("phoneDetails") as string | null) ?? "";
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  let phoneDetails: PhoneDetails | null = null;
  if (phoneDetailsRaw) {
    try {
      phoneDetails = JSON.parse(phoneDetailsRaw) as PhoneDetails;
    } catch {
      phoneDetails = null;
    }
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false as const,
      error: "Email service is not configured.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} via ${siteName} website`,
      attachments: [
        {
          content: getEmailLogoBase64(),
          filename: "logo.png",
          contentId: EMAIL_LOGO_CONTENT_ID,
        },
      ],
      react: (
        <EmailTemplate
          name={name}
          email={email}
          phone={phone}
          phoneDetails={phoneDetails}
          subject={subject}
          message={message}
          logoSrc={getEmailLogoCidSrc()}
        />
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false as const, error: "Failed to send email." };
    }

    return { success: true as const };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false as const, error: "Failed to send email." };
  }
}
