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
export function TextInput(_a) {
    var className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, label = _a.label, name = _a.name, style = _a.style, _c = _a.type, type = _c === void 0 ? 'text' : _c, value = _a.value, restProps = __rest(_a, ["className", "disabled", "label", "name", "style", "type", "value"]);
    return (React.createElement("div", { className: clsx('jpk-text-input', disabled && 'jpk-text-input--disabled', className), style: omit(style, 'input', 'label') },
        label && (React.createElement("label", { htmlFor: name, className: 'jpk-text-input__label', style: style === null || style === void 0 ? void 0 : style.label }, label)),
        React.createElement("input", __assign({}, restProps, { className: 'jpk-text-input__input', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.input, type: type, value: value }))));
}
export default TextInput;
//# sourceMappingURL=TextInput.js.map