import en from './en';
import es from './es';
import type { Translations } from './en';

export type Locale = 'en' | 'es';
export type { Translations };

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];
export const localeLabels: Record<Locale, string> = { en: 'EN', es: 'ES' };

const translations: Record<Locale, Translations> = { en, es };

export function t(locale: string | undefined): Translations {
  const l = (locale ?? defaultLocale) as Locale;
  return translations[l] ?? translations[defaultLocale];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  const suffix = path === '/' ? '' : path;
  return `/${locale}${suffix}`;
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
