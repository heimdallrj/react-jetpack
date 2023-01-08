var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import clsx from 'clsx';
import React from 'react';
import { omit } from '../utils/mixins';
export function SearchInput(_a) {
    var action = _a.action, className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.name, name = _c === void 0 ? 'q' : _c, style = _a.style, onSubmit = _a.onSubmit, restProps = __rest(_a, ["action", "className", "disabled", "name", "style", "onSubmit"]);
    return (React.createElement("form", { action: action, className: clsx('jpk-search-input', disabled && 'jpk-search-input--disabled', className), style: omit(style, 'input', 'button') },
        React.createElement("input", __assign({}, restProps, { "aria-label": 'Search', autoComplete: 'off', className: 'jpk-search-input__input', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.input, type: 'search' })),
        React.createElement("button", { className: 'jpk-search-input__btn', type: 'submit', disabled: disabled, style: style === null || style === void 0 ? void 0 : style.button, onClick: onSubmit }, "Search")));
}
export default SearchInput;
//# sourceMappingURL=SearchInput.js.map