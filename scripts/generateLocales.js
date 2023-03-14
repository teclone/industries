const path = require("path");
const fs = require("fs");
const industriesDb = require("../db/industries.json");

const locales = new Map();
const langs = new Set();

// Generate each locale group
industriesDb.forEach(({ translations, ...record }) => {
  const en = locales.get("en") ?? [];
  en.push(record);
  locales.set("en", en);
  langs.add("en");

  Object.keys(translations).forEach((lang) => {
    const loc = locales.get(lang) ?? [];
    loc.push({
      ...record,
      name: translations[lang],
    });
    locales.set(lang, loc);
    langs.add(lang);
  });
});

const en = locales.get("en") ?? [];

for (const lang of locales.keys()) {
  const loc = locales.get(lang) ?? [];

  // Check that each ID has a translation, if it does not leave the name in English
  if (en.length !== loc.length) {
    const toAppend = [];
    en.forEach((enItem) => {
      const idx = loc.findIndex((item) => item.id === enItem.id);
      if (idx < 0) {
        toAppend.push(enItem);
      }
    });

    loc.push(...toAppend);
    loc.sort((a, b) => {
      return a.id - b.id;
    });
  }

  const filename = path.resolve("src", "locale", `${lang}.json`);
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  fs.writeFileSync(filename, JSON.stringify(loc), "utf8", function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Generated: ${loc}`);
    }
  });
}

const filename = path.resolve("src", "locale", "en.json");
if (fs.existsSync(filename)) {
  fs.unlinkSync(filename);
}
fs.writeFileSync(filename, JSON.stringify(en), "utf8", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Generated: en");
  }
});

const filenameLangs = path.resolve("src", "langs.json");
if (fs.existsSync(filenameLangs)) {
  fs.unlinkSync(filenameLangs);
}
fs.writeFileSync(
  filenameLangs,
  JSON.stringify(Array.from(langs)),
  "utf8",
  function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated: langs");
    }
  }
);

console.log("Task finished successfully.");
