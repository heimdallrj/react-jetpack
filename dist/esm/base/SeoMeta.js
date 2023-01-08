import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SeoMeta(_a) {
    var title = _a.title, _b = _a.metaTags, metaTags = _b === void 0 ? [] : _b;
    return (React.createElement(Helmet, null,
        React.createElement("title", null, title),
        metaTags.map(function (_a) {
            var name = _a.name, content = _a.content;
            return (React.createElement("meta", { name: name, content: content }));
        })));
}
//# sourceMappingURL=SeoMeta.js.map