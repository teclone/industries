# Industries

Exports list of industry categories, reusable for website implementations, picked from linkedin.

## Installation

module is available via npm or yarn

```bash
npm install @teclone/industries
```

## Usage

import english translation industries, which is the default. the rest of the locales industries can be imported directly from their file locations.

- esm module import

  ```javascript
  import { industries } from '@teclone/industries';
  industries.forEach((industry) => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
  ```

- cjs import

  ```javascript
  const { industries } = require('@teclone/industries');
  industries.forEach((industry) => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
  ```

- esm module import, direct locale specific import

  ```javascript
  import industriesInSpanishLocale from '@teclone/industries/esm/locales/es.json';
  industriesInSpanishLocale.forEach((industry) => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
  ```

- cjs import, working in node.js (server side)

  ```javascript
  // require from @teclone/industries/esm/locales/es.json will also work because this is json file
  const industriesInSpanishLocale = require('@teclone/industries/cjs/locales/es.json');

  industriesInSpanishLocale.forEach((industry) => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
  ```

### Dynamic import of industries by locale with code-splitting support

```javascript
import { getIndustriesByLocale } from '@teclone/industries';

const locale = 'fr';

getIndustriesByLocale(locale).then((industries) => {
  industries.forEach((industry) => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
});
```

### Print list of supported locales

```javascript
import { supportedLocales } from '@teclone/industries';

console.log(supportedLocales);
```

### Export types

```javascript
import { type Industry, industries } from '@teclone/industries'

const industriesSamples: Industry[] = industries;

industriesSamples.forEach((industry) => {
  console.log(industry); // {id: number, linkedinId: number, name: string};
});
```

### Need to support more locales?

Please create a pull request to support other locales. Thanks
