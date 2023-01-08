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
exports.SearchInput = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var mixins_1 = require("../utils/mixins");
function SearchInput(_a) {
    var action = _a.action, className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.name, name = _c === void 0 ? 'q' : _c, style = _a.style, onSubmit = _a.onSubmit, restProps = __rest(_a, ["action", "className", "disabled", "name", "style", "onSubmit"]);
    return (react_1["default"].createElement("form", { action: action, className: (0, clsx_1["default"])('jpk-search-input', disabled && 'jpk-search-input--disabled', className), style: (0, mixins_1.omit)(style, 'input', 'button') },
        react_1["default"].createElement("input", __assign({}, restProps, { "aria-label": 'Search', autoComplete: 'off', className: 'jpk-search-input__input', disabled: disabled, name: name, style: style === null || style === void 0 ? void 0 : style.input, type: 'search' })),
        react_1["default"].createElement("button", { className: 'jpk-search-input__btn', type: 'submit', disabled: disabled, style: style === null || style === void 0 ? void 0 : style.button, onClick: onSubmit }, "Search")));
}
exports.SearchInput = SearchInput;
exports["default"] = SearchInput;
//# sourceMappingURL=SearchInput.js.map