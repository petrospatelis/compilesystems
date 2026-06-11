"use client";

import { useRef, useState, type FormEvent } from "react";
import { useI18n } from "./i18n-provider";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleClear() {
    formRef.current?.reset();
    setStatus("idle");
    setErrorMessage("");
  }

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
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="contact-name" className="form-field__label">
            {t.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={status === "submitting"}
            className="form-field__input"
            placeholder={t.form.namePlaceholder}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email" className="form-field__label">
            {t.form.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "submitting"}
            className="form-field__input"
            placeholder={t.form.emailPlaceholder}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-subject" className="form-field__label">
          {t.form.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          disabled={status === "submitting"}
          className="form-field__input"
          placeholder={t.form.subjectPlaceholder}
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message" className="form-field__label">
          {t.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          className="form-field__input form-field__textarea"
          placeholder={t.form.messagePlaceholder}
        />
      </div>

      {status === "success" && (
        <p role="status" className="form-feedback form-feedback--success">
          {t.form.success}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="form-feedback form-feedback--error">
          {errorMessage}
        </p>
      )}

      <div className="contact-form__actions">
        <button
          type="button"
          onClick={handleClear}
          disabled={status === "submitting"}
          className="btn btn-secondary"
        >
          {t.form.clear}
        </button>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary"
        >
          {status === "submitting" ? t.form.submitting : t.form.submit}
        </button>
      </div>
    </form>
  );
}
