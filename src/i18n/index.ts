import it from './it.json';
import tr from './tr.json';

const translations = { it, tr } as const;

export type Locale = keyof typeof translations;
export const locales: Locale[] = ['it', 'tr'];
export const defaultLocale: Locale = 'it';

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return defaultLocale;
}

export function localePath(locale: Locale, path: string = '') {
  return `/${locale}${path}`;
}

export function switchLocalePath(currentUrl: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(currentUrl);
  return currentUrl.pathname.replace(`/${currentLocale}`, `/${targetLocale}`);
}
