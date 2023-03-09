import en from './locale/en';

import { supportedLocales } from './supportedLocales';

export *  from './supportedLocales';

export const industries = en;

export function getIndustriesByLocale (locale: string) {
  if (supportedLocales.indexOf(locale.toLowerCase())) {
    return require(`./locale/${locale.toLowerCase()}`).default;
  } else {
    return industries;
  }
}