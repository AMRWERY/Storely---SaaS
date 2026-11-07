export type LocaleCode = (typeof locales)[number]["code"];

export const locales = [
  { code: "en", language: "en-US", dir: "ltr", name: "English" },
  { code: "ar", language: "ar-EG", dir: "rtl", name: "العربية" },
] as const;

export const defaultLocale: LocaleCode = "en";