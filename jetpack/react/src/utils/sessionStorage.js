const sessionStorage = {
  set: (key, value) => window.sessionStorage.setItem(key, value),
  get: (key) => window.sessionStorage.getItem(key),
  getParsed: (key) => {
    try {
      const data = JSON.parse(window.sessionStorage.getItem(key));
      return data;
    } catch (err) {
      return null;
    }
  },
  remove: (key) => window.sessionStorage.removeItem(key),
  clear: () => window.sessionStorage.clear(),
};

export default sessionStorage;
