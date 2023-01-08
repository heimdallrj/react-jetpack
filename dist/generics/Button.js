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
exports.Button = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
function Button(_a) {
    var children = _a.children, className = _a.className, _b = _a.size, size = _b === void 0 ? 'medium' : _b, type = _a.type, variant = _a.variant, restProps = __rest(_a, ["children", "className", "size", "type", "variant"]);
    return (react_1["default"].createElement("button", __assign({}, restProps, { type: type, className: (0, clsx_1["default"])('jpk-btn', variant && "jpk-btn__".concat(variant), size && "jpk-btn__".concat(size), className) }), children));
}
exports.Button = Button;
exports["default"] = Button;
//# sourceMappingURL=Button.js.map