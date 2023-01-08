"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Select = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var mixins_1 = require("../utils/mixins");
function Select(_a) {
    var className = _a.className, disabled = _a.disabled, label = _a.label, name = _a.name, _b = _a.options, options = _b === void 0 ? [] : _b, style = _a.style, value = _a.value, restProps = __rest(_a, ["className", "disabled", "label", "name", "options", "style", "value"]);
    return (react_1["default"].createElement("div", { className: (0, clsx_1["default"])('jpk-select', disabled && 'jpk-select--disabled', className), style: (0, mixins_1.omit)(style, 'select', 'option', 'label') },
        label && (react_1["default"].createElement("label", { className: 'jpk-select__label', htmlFor: name, style: style === null || style === void 0 ? void 0 : style.label }, label)),
        react_1["default"].createElement("select", __assign({ className: 'jpk-select__menu', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.select, value: value }, restProps), options.map(function (opt) { return (react_1["default"].createElement("option", { className: 'jpk-select__menu__item', key: opt.value, value: opt.value, style: style === null || style === void 0 ? void 0 : style.option }, opt.label)); }))));
}
exports.Select = Select;
exports["default"] = Select;
//# sourceMappingURL=Select.js.map