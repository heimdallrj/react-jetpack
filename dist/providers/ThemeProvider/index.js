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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var styles_1 = require("./styles");
var styles = {
    '--colors-primary': '#2b3a55',
    '--colors-secondary': '#ce7777',
    '--colors-tertiary': '#e8c4c4',
    '--colors-accent': '#f2e5e5',
    '--colors-error': 'rgb(253, 237, 237)',
    '--colors-warning': 'rgb(255, 244, 229)',
    '--colors-info': 'rgb(229, 246, 253)',
    '--colors-success': 'rgb(237, 247, 237)',
    '--colors-bg-primary': 'white',
    '--colors-bg-secondary': '#efefef',
    '--colors-text-primary': '#000000',
    '--colors-text-secondary': '#cccccc',
    '--colors-disabled': 'rgba(0, 0, 0, 0.12)',
    '--colors-a': 'blue',
    '--colors-a-hover': '#cccccc',
    '--fonts-primary': "'Montserrat', sans-serif",
    '--fonts-secondary': "'Montserrat', sans-serif",
    '--fonts-size-primary': '14px'
};
function ThemeProvider(_a) {
    var children = _a.children, theme = _a.theme;
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(styles_1.GlobalStyle, __assign({}, styles)),
        children));
}
exports["default"] = ThemeProvider;
//# sourceMappingURL=index.js.map