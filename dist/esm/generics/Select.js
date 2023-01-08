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
export function Select(_a) {
    var className = _a.className, disabled = _a.disabled, label = _a.label, name = _a.name, _b = _a.options, options = _b === void 0 ? [] : _b, style = _a.style, value = _a.value, restProps = __rest(_a, ["className", "disabled", "label", "name", "options", "style", "value"]);
    return (React.createElement("div", { className: clsx('jpk-select', disabled && 'jpk-select--disabled', className), style: omit(style, 'select', 'option', 'label') },
        label && (React.createElement("label", { className: 'jpk-select__label', htmlFor: name, style: style === null || style === void 0 ? void 0 : style.label }, label)),
        React.createElement("select", __assign({ className: 'jpk-select__menu', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.select, value: value }, restProps), options.map(function (opt) { return (React.createElement("option", { className: 'jpk-select__menu__item', key: opt.value, value: opt.value, style: style === null || style === void 0 ? void 0 : style.option }, opt.label)); }))));
}
export default Select;
//# sourceMappingURL=Select.js.map