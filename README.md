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
