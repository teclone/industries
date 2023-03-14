const en = require('./locale/en.json');

import { supportedLocales } from './supportedLocales';

export *  from './supportedLocales';

export const industries = en;

export function getIndustriesByLocale (locale: string) {
  if (supportedLocales.indexOf(locale.toLowerCase())) {
    return require(`./locale/${locale.toLowerCase()}.json`);
  } else {
    return industries;
  }
}