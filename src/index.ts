import { supportedLocales } from './constants';

import enIndustries from './locales/en.json';

export type IndustryName = string;

export interface Industry {
  name: IndustryName;
  id: number;
  linkedinId: number;
}

export { enIndustries as industries };

export function getIndustriesByLocale(locale: string): Promise<Industry[]> {
  locale = locale.toLowerCase();

  if (!supportedLocales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale} is not supported`);
  }

  return import(`./locales/${locale}.json`).then((result) => result.default);
}

export { DEFAULT_LOCALE, supportedLocales } from './constants';
