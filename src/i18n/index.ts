import en from './en';
import es from './es';
import pt from './pt';
import type { Translations } from './en';

export type Locale = 'en' | 'es' | 'pt-br';
export type { Translations };

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es', 'pt-br'];
export const localeLabels: Record<Locale, string> = { en: 'EN', es: 'ES', 'pt-br': 'PT-BR' };

const translations: Record<Locale, Translations> = { en, es, 'pt-br': pt };

export function t(locale: string | undefined): Translations {
  const l = (locale ?? defaultLocale) as Locale;
  return translations[l] ?? translations[defaultLocale];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  const suffix = path === '/' ? '' : path;
  return `/${locale}${suffix}`;
}

const localeTags: Record<Locale, string> = { en: 'en-US', es: 'es-ES', 'pt-br': 'pt-BR' };

// Formats a date string (e.g. "June 22, 2026") into the given locale's long form.
export function formatDate(dateStr: string, locale: Locale): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return new Intl.DateTimeFormat(localeTags[locale] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function getAlternateLinks(path: string) {
  return locales.map((l) => ({
    locale: l,
    href: getLocalizedPath(path, l),
  }));
}

export function stripLocalePrefix(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}
