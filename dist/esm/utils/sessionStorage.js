var sessionStorage = {
    set: function (key, value) { return window.sessionStorage.setItem(key, value); },
    get: function (key) { return window.sessionStorage.getItem(key); },
    getParsed: function (key) {
        try {
            var data = JSON.parse(window.sessionStorage.getItem(key));
            return data;
        }
        catch (err) {
            return null;
        }
    },
    remove: function (key) { return window.sessionStorage.removeItem(key); },
    clear: function () { return window.sessionStorage.clear(); }
};
export default sessionStorage;
//# sourceMappingURL=sessionStorage.js.map