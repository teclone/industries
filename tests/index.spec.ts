import {
  supportedLocales,
  DEFAULT_LOCALE,
  getIndustriesByLocale,
  industries,
} from '../src/index';

describe('industries', function () {
  describe('supported locales', function () {
    it(`should export an array of supportedLocales`, function () {
      expect(supportedLocales.length).toBeGreaterThan(0);
    });
  });

  describe('default locale', function () {
    it(`should export a default locale`, function () {
      expect(DEFAULT_LOCALE).toEqual('en');
    });

    it(`should export an array of supportedLocales`, function () {
      expect(supportedLocales.length).toBeGreaterThan(0);
    });
  });

  describe('default locale industries', function () {
    it(`should export default locale industries by default`, function () {
      expect(industries.length).toBeGreaterThan(0);
    });

    it(`should export an array of supportedLocales`, function () {
      expect(supportedLocales.length).toBeGreaterThan(0);
    });
  });

  describe('getIndustriesByLocale', function () {
    it(`if given a locale, it should return the locale's industries as a promise`, function () {
      return getIndustriesByLocale('es').then((result) => {
        expect(result.length).toBeGreaterThan(0);
      });
    });
  });
});
