import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import { getContinentForCountry } from "./country-continents";
import { defaultLocale, type Locale } from "./i18n/locales";

export type PhoneDetails = {
  input: string;
  e164: string;
  international: string;
  national: string;
  countryCode: CountryCode;
  countryName: string;
  continent: string;
  callingCode: string;
};

export const PHONE_COUNTRY_CODE_REQUIRED_ERROR =
  "Please include your country code (e.g. +30) with your phone number.";

export const PHONE_INVALID_ERROR =
  "Please enter a valid international phone number.";

const displayLocaleBySiteLocale: Record<Locale, string> = {
  en: "en-GB",
  el: "el-GR",
  fil: "fil-PH",
};

export function resolveDisplayLocale(locale?: string): string {
  if (locale && locale in displayLocaleBySiteLocale) {
    return displayLocaleBySiteLocale[locale as Locale];
  }

  return displayLocaleBySiteLocale[defaultLocale];
}

function hasCountryCallingCode(input: string): boolean {
  return input.trimStart().startsWith("+");
}

function getCountryName(countryCode: CountryCode, displayLocale: string): string {
  try {
    return (
      new Intl.DisplayNames([displayLocale], { type: "region" }).of(countryCode) ??
      countryCode
    );
  } catch {
    return countryCode;
  }
}

export function parseContactPhone(
  input: string,
  locale?: string,
): PhoneDetails | null {
  const trimmed = input.trim();
  if (!trimmed || !hasCountryCallingCode(trimmed)) return null;

  const parsed = parsePhoneNumberFromString(trimmed);
  if (!parsed || !parsed.isValid()) return null;

  const countryCode = parsed.country;
  if (!countryCode) return null;

  const displayLocale = resolveDisplayLocale(locale);
  const continent = getContinentForCountry(countryCode);

  return {
    input: trimmed,
    e164: parsed.number,
    international: parsed.formatInternational(),
    national: parsed.formatNational(),
    countryCode,
    countryName: getCountryName(countryCode, displayLocale),
    continent: continent ?? "Unknown",
    callingCode: parsed.countryCallingCode,
  };
}

export function getPhoneValidationError(
  input: string,
  locale?: string,
): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (!hasCountryCallingCode(trimmed)) {
    return PHONE_COUNTRY_CODE_REQUIRED_ERROR;
  }

  if (!isValidPhoneNumber(trimmed)) {
    return PHONE_INVALID_ERROR;
  }

  if (!parseContactPhone(trimmed, locale)) {
    return PHONE_INVALID_ERROR;
  }

  return null;
}

export function isValidContactPhone(input: string, locale?: string): boolean {
  return getPhoneValidationError(input, locale) === null;
}

export function formatPhoneRegionLabel(details: PhoneDetails): string {
  return `${details.countryName} · ${details.continent}`;
}

export type PhoneRecognition = {
  countryCode: CountryCode | null;
  regionLabel: string | null;
  formattedNumber: string | null;
  validationError: string | null;
};

export function countryCodeToFlag(countryCode: CountryCode): string {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0)),
    );
}

export function recognizeContactPhone(
  input: string,
  locale?: string,
): PhoneRecognition {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      countryCode: null,
      regionLabel: null,
      formattedNumber: null,
      validationError: null,
    };
  }

  if (!hasCountryCallingCode(trimmed)) {
    return {
      countryCode: null,
      regionLabel: null,
      formattedNumber: null,
      validationError: PHONE_COUNTRY_CODE_REQUIRED_ERROR,
    };
  }

  const details = parseContactPhone(trimmed, locale);
  if (details) {
    return {
      countryCode: details.countryCode,
      regionLabel: formatPhoneRegionLabel(details),
      formattedNumber: details.international,
      validationError: null,
    };
  }

  const parsed = parsePhoneNumberFromString(trimmed);
  if (parsed?.country) {
    const displayLocale = resolveDisplayLocale(locale);
    const countryName = getCountryName(parsed.country, displayLocale);
    const continent = getContinentForCountry(parsed.country) ?? "Unknown";

    return {
      countryCode: parsed.country,
      regionLabel: `${countryName} · ${continent}`,
      formattedNumber: parsed.formatInternational(),
      validationError: PHONE_INVALID_ERROR,
    };
  }

  return {
    countryCode: null,
    regionLabel: null,
    formattedNumber: null,
    validationError: PHONE_INVALID_ERROR,
  };
}

export function phoneTelHref(e164: string): string {
  return `tel:${e164}`;
}
