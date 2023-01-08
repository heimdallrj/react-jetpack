"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
function SeoMeta(_a) {
    var title = _a.title, _b = _a.metaTags, metaTags = _b === void 0 ? [] : _b;
    return (react_1["default"].createElement(react_helmet_async_1.Helmet, null,
        react_1["default"].createElement("title", null, title),
        metaTags.map(function (_a) {
            var name = _a.name, content = _a.content;
            return (react_1["default"].createElement("meta", { name: name, content: content }));
        })));
}
exports["default"] = SeoMeta;
//# sourceMappingURL=SeoMeta.js.map