# Utils

A set of useful utils listed here.

## ToC

<!--ts-->

- [Rollbar](#rollbar)
- [React GA](#react-ga)
- [js-cookie](#js-cookie)
- [hotjar](#hotjar)
- [firebase](#firebase)
<!--te-->

### [`Rollbar`](https://www.npmjs.com/package/rollbar)

```bash
npm i -S rollbar // yarn add
```

```ts
// @jetpack/react/utils/rollbar.js
import Rollbar from 'rollbar';

export const init = ({ rollbarToken }) => {
  window._rb = new Rollbar({
    accessToken: rollbarToken,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: process.env.NODE_ENV,
    },
  });
};

export const log = (...args) => window._rb.info(args.join('\r\n'));

export const warn = (...args) => window._rb.warn(args.join('\r\n'));

export const critical = (...args) => window._rb.critical(args.join('\r\n'));

export const debug = (...args) => window._rb.debug(args.join('\r\n'));

export const error = (...args) => window._rb.error(args.join('\r\n'));
```

### [`React GA`](https://www.npmjs.com/package/react-ga)

```bash
npm i -S react-ga // yarn add
```

```js
// @jetpack/react/utils/ga.js
import ReactGA from 'react-ga';

export const event = {
  /**
   *
   * @param { object } args
   * {
   *  category,
   *  action,
   *  label,
   *  value,
   *  nonInteraction,
   *  transport
   * }
   */
  log: (args) => ReactGA.event(args),
  track: () =>
    ReactGA.pageview(window.location.pathname + window.location.search),
};

export const init = ({ gaTrackingCode }) => {
  ReactGA.initialize(gaTrackingCode);
  event.track();
};

export const timing = (args) => ReactGA.timing(args);

export const ga = (arg1, arg2, arg3) => ReactGA.ga(arg1, arg2, arg3);

export const outboundLink = (args, hitCallback) =>
  ReactGA.outboundLink(args, hitCallback);

export const exception = (args) => ReactGA.exception(args);
```

### [`js-cookie`](https://www.npmjs.com/package/js-cookie)

```bash
npm i -S js-cookie // yarn add
```

```ts
// @jetpack/react/utils/cookie.js
import Cookie from 'js-cookie';

export const setCookie = (cookieName, cookieValue, expires = 30) =>
  Cookie.set(cookieName, cookieValue, {
    expires,
    path: '/',
    sameSite: 'strict',
  });

export const getCookie = (cookieName) => Cookie.get(cookieName);

export const removeCookie = (cookieName) => Cookie.remove(cookieName);
```

### [`hotjar`](https://www.npmjs.com/package/react-hotjar)

```bash
npm i -S react-hotjar // yarn add
```

```js
// @jetpack/react/utils/hotjar.js
import { hotjar } from 'react-hotjar';

export const initialize = ({ hjID, hjVersion }) =>
  hotjar.initialize(hjID, hjVersion);

export const trigger = (triggerName: string) => {
  window.hj('trigger', triggerName);
};
```

### [`firebase`](https://www.npmjs.com/package/firebase)

```bash
npm i firebase // yarn add
```

```js
// @jetpack/react/utils/firebase/config.js
import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig as config } from 'config';

// Initialize Firebase
export const init = (config) => {
  firebase.initializeApp(config);
  return firebase;
};

export default firebase;
```

```js
// @jetpack/react/utils/firebase/auth.js
import firebase from './config';

const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');

export const signInWithPhoneNumber = (phoneNumber) =>
  firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha);
```
