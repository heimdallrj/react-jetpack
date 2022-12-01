# @jetpack/react

An opinionated, but loosely coupled toolkit for efficient `React.js` development.

## Getting Started

`@jetpack/react` is based on [Create Reat App](https://github.com/facebook/create-react-app) custom template which could install using the following command.

```
npx create-react-app my-react-app --template jetpack-typescript
```

### Install all the necessory dependencies

**npm**

```
npm install axios clsx lodash styled-components react-helmet-async
npm install @types/lodash @types/styled-components
```

**yarn**

```
yarn add axios clsx lodash styled-components react-helmet-async
yarn add @types/lodash @types/styled-components
```

### Setting up for `Absolute Imports`

Update `tsconfig.json` as below;

```json
{
  ..
  "compilerOptions": {
    ..
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

### Configure `@jetpack/react`

**index.tsx**

```ts
// index.tsx
import { JetpackProvider } from '@jetpack/react';
import App from './App';

// @todo: configure theme here
const themeConfig = {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <JetpackProvider config={themeConfig}>
      <App />
    </JetpackProvider>
  </React.StrictMode>
);
:
```

### Configure `Storybook`

Update `package.json` as below;

```json
{
  "scripts": {
    ..
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
  }
}
```
