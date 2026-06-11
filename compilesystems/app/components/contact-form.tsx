"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "./i18n-provider";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? t.form.genericError);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t.form.genericError,
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-foreground/70"
          >
            {t.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            placeholder={t.form.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-foreground/70"
          >
            {t.form.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            placeholder={t.form.emailPlaceholder}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-medium text-foreground/70"
        >
          {t.form.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          disabled={status === "submitting"}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          placeholder={t.form.subjectPlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-foreground/70"
        >
          {t.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          placeholder={t.form.messagePlaceholder}
        />
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-accent/30 bg-accent-muted/40 px-4 py-3 text-sm text-foreground"
        >
          {t.form.success}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary"
      >
        {status === "submitting" ? t.form.submitting : t.form.submit}
      </button>
    </form>
  );
}
