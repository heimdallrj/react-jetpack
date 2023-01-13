import Cookie from 'js-cookie';

export const setCookie = (cookieName, cookieValue, expires = 30) =>
  Cookie.set(cookieName, cookieValue, {
    expires,
    path: '/',
    sameSite: 'strict',
  });

export const getCookie = (cookieName) => Cookie.get(cookieName);

export const removeCookie = (cookieName) => Cookie.remove(cookieName);
