# Industries

Exports list of industry categories, reusable for website implementations, picked from linkedin.

## Installation

module is available on npm

```bash
npm install @teclone/industries
```

## Usage

```typescript
import { industries } from '@teclone/industries';

industries.foreach(industry => {
  console.log(industry); // {id: number, linkedinId: number, name: string};
});
```

```typescript
import industriesInSpanish from '@teclone/industries/es';

industriesInSpanish.foreach(industry => {
  console.log(industry); // {id: number, linkedinId: number, name: string};
});
```

```typescript
import { supportedLocales, getIndustriesByLocale } from '@teclone/industries';

supportedLocales.foreach(loc => {
  getIndustriesByLocale(loc).foreach(industry => {
    console.log(industry); // {id: number, linkedinId: number, name: string};
  });
});
```