import {
  industries,
  supportedLocales,
  DEFAULT_LOCALE,
  getIndustriesByLocale,
} from "../src/index";
import industriesInSpanish from "../src/locale/es";

describe("industries", function () {
  it(`should export an array of industries`, function () {
    expect(industries.length).toBeGreaterThan(0);
  });

  it(`should export an array of supportedLocales`, function () {
    expect(supportedLocales.length).toBeGreaterThan(0);
  });

  it(`should export a default locale`, function () {
    expect(DEFAULT_LOCALE).toEqual("en");
  });

  it(`should get industries by locale`, () => {
    for (const loc of supportedLocales) {

      const industriesInLoc = getIndustriesByLocale(loc);
      expect(industriesInLoc.length).toEqual(industries.length);
    }
  });

  it(`should export an array of industries in locale loaded directly`, function () {
    expect(industriesInSpanish.length).toBeGreaterThan(0);
  });

});
