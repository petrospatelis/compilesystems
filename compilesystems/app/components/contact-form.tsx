"use client";

import {
  countryCodeToFlag,
  PHONE_COUNTRY_CODE_REQUIRED_ERROR,
  PHONE_INVALID_ERROR,
  recognizeContactPhone,
} from "../lib/phone";
import type { Translations } from "../lib/i18n/translations";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useI18n } from "./i18n-provider";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FEEDBACK_TIMEOUT_MS = 3000;

function getLocalizedPhoneError(
  error: string | null,
  t: Translations,
): string | null {
  if (!error) return null;

  if (error === PHONE_COUNTRY_CODE_REQUIRED_ERROR) {
    return t.form.phoneCountryCodeRequired;
  }

  if (error === PHONE_INVALID_ERROR) {
    return t.form.phoneInvalid;
  }

  return error;
}

export function ContactForm() {
  const { t, locale } = useI18n();
  const formRef = useRef<HTMLFormElement>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const phoneRecognition = useMemo(
    () => recognizeContactPhone(phoneValue, locale),
    [phoneValue, locale],
  );

  const localizedPhoneError = getLocalizedPhoneError(
    phoneRecognition.validationError,
    t,
  );

  function clearFeedbackTimeout() {
    if (feedbackTimeoutRef.current !== null) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
  }

  function resetPhoneField() {
    setPhoneValue("");
    setPhoneTouched(false);
  }

  function resetFeedback() {
    setStatus("idle");
    setErrorMessage("");
  }

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    clearFeedbackTimeout();
    feedbackTimeoutRef.current = setTimeout(() => {
      feedbackTimeoutRef.current = null;
      resetFeedback();
    }, FEEDBACK_TIMEOUT_MS);

    return clearFeedbackTimeout;
  }, [status]);

  function handleClear() {
    clearFeedbackTimeout();
    formRef.current?.reset();
    resetPhoneField();
    resetFeedback();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (phoneValue.trim() && phoneRecognition.validationError) {
      setPhoneTouched(true);
      setStatus("error");
      setErrorMessage(
        localizedPhoneError ?? t.form.genericError,
      );
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: phoneValue,
          subject: formData.get("subject"),
          message: formData.get("message"),
          locale,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? t.form.genericError);
      }

      setStatus("success");
      form.reset();
      resetPhoneField();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t.form.genericError,
      );
    }
  }

  function renderPhoneStatus() {
    if (phoneTouched && localizedPhoneError) {
      return (
        <div
          className="phone-field-status phone-field-status--error"
          role="alert"
        >
          <span className="phone-field-status__marker" aria-hidden="true">
            !
          </span>
          <span className="phone-field-status__text">{localizedPhoneError}</span>
        </div>
      );
    }

    if (phoneRecognition.regionLabel && !phoneRecognition.validationError) {
      return (
        <div className="phone-field-status phone-field-status--success">
          <span className="phone-field-status__marker" aria-hidden="true">
            ✓
          </span>
          <span className="phone-field-status__text">
            {phoneRecognition.regionLabel}
          </span>
        </div>
      );
    }

    if (phoneRecognition.regionLabel) {
      return (
        <div className="phone-field-status phone-field-status--pending">
          <span className="phone-field-status__marker" aria-hidden="true" />
          <span className="phone-field-status__text">
            {phoneRecognition.regionLabel}
          </span>
        </div>
      );
    }

    return (
      <div className="phone-field-status phone-field-status--idle">
        <span className="phone-field-status__marker" aria-hidden="true">
          +
        </span>
        <span className="phone-field-status__text">{t.form.phoneHint}</span>
      </div>
    );
  }

  const recognizedCountryCode = phoneRecognition.countryCode;

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

      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="contact-phone" className="form-field__label">
            {t.form.phone}
          </label>
          <div className="form-field__phone-shell">
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              disabled={status === "submitting"}
              className={`form-field__input${
                recognizedCountryCode ? " form-field__input--with-flag" : ""
              }`}
              placeholder={t.form.phonePlaceholder}
              title={t.form.phoneHint}
              pattern="^\+[\d\s().-]{6,24}$"
              value={phoneValue}
              onChange={(event) => setPhoneValue(event.target.value)}
              onBlur={() => setPhoneTouched(true)}
            />
            {recognizedCountryCode ? (
              <span
                className="form-field__phone-flag"
                aria-label={phoneRecognition.regionLabel ?? recognizedCountryCode}
                title={phoneRecognition.regionLabel ?? recognizedCountryCode}
              >
                {countryCodeToFlag(recognizedCountryCode)}
              </span>
            ) : null}
          </div>
          {renderPhoneStatus()}
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
