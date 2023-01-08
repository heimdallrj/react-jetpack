"use strict";
exports.__esModule = true;
var localStorage = {
    set: function (key, value) { return window.localStorage.setItem(key, value); },
    get: function (key) { return window.localStorage.getItem(key); },
    getParsed: function (key) {
        try {
            var data = JSON.parse(window.localStorage.getItem(key));
            return data;
        }
        catch (err) {
            return null;
        }
    },
    remove: function (key) { return window.localStorage.removeItem(key); },
    clear: function () { return window.localStorage.clear(); }
};
exports["default"] = localStorage;
//# sourceMappingURL=localStorage.js.map