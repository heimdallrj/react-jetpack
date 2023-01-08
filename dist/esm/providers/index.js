import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './ThemeProvider';
export default function Providers(_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? {} : _b;
    return (React.createElement(HelmetProvider, null,
        React.createElement(ThemeProvider, { theme: theme }, children)));
}
//# sourceMappingURL=index.js.map