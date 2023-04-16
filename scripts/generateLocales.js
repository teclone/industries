const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

const industriesDb = require('../db/industries.json');

const supportedLocales = ['en', 'es', 'fr'];

const defaultLocale = 'en';

for (const locale of supportedLocales) {
  const industriesForLocale = industriesDb.map(
    ({ id, linkedinId, name, translations }) => {
      if (locale === defaultLocale) {
        return {
          id,
          linkedinId,
          name,
        };
      }

      return {
        id,
        linkedinId,
        name: translations[locale] || name,
      };
    }
  );

  const content = JSON.stringify(industriesForLocale, null, 2);
  fs.writeFileSync(
    path.resolve(__dirname, `../src/locales/${locale}.json`),
    prettier.format(`${content}`, {
      parser: 'json',
    })
  );
}

fs.writeFileSync(
  path.resolve(__dirname, '../src/constants.ts'),

  prettier.format(
    `
    export const DEFAULT_LOCALE = '${defaultLocale}';

    export const supportedLocales = ${JSON.stringify(supportedLocales)};
  `,
    {
      parser: 'typescript',
    }
  )
);
