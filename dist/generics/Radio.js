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
exports.Radio = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var mixins_1 = require("../utils/mixins");
function Radio(_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, label = _a.label, name = _a.name, style = _a.style, value = _a.value, restProps = __rest(_a, ["checked", "className", "disabled", "label", "name", "style", "value"]);
    return (react_1["default"].createElement("div", { className: (0, clsx_1["default"])('jpk-radio', checked && 'jpk-radio--checked', disabled && 'jpk-radio--disabled', className), style: (0, mixins_1.omit)(style, 'input', 'label') },
        react_1["default"].createElement("input", __assign({}, restProps, { checked: checked, className: 'jpk-radio__input', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.input, type: 'radio', value: value })),
        label && (react_1["default"].createElement("label", { htmlFor: name, className: 'jpk-radio__label', style: style === null || style === void 0 ? void 0 : style.label }, label))));
}
exports.Radio = Radio;
exports["default"] = Radio;
//# sourceMappingURL=Radio.js.map