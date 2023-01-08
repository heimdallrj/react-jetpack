"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
var ThemeProvider_1 = __importDefault(require("./ThemeProvider"));
function Providers(_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? {} : _b;
    return (react_1["default"].createElement(react_helmet_async_1.HelmetProvider, null,
        react_1["default"].createElement(ThemeProvider_1["default"], { theme: theme }, children)));
}
exports["default"] = Providers;
//# sourceMappingURL=index.js.map