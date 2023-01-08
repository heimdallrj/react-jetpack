"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Accordion = exports.AccordionItem = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importStar(require("react"));
function AccordionItem(_a) {
    var id = _a.id, summary = _a.summary, children = _a.children, className = _a.className, style = _a.style;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    return (react_1["default"].createElement("section", { key: id !== null && id !== void 0 ? id : summary, className: (0, clsx_1["default"])('jpk-accordion__section', className), style: style },
        react_1["default"].createElement("div", { role: 'button', "aria-expanded": isOpen, className: 'jpk-accordion__summary', onClick: function () { return setIsOpen(!isOpen); } },
            react_1["default"].createElement("div", null, summary),
            react_1["default"].createElement("div", null, isOpen ? '-' : '+')),
        isOpen && react_1["default"].createElement("div", { className: 'jpk-accordion__content' }, children)));
}
exports.AccordionItem = AccordionItem;
function Accordion(_a) {
    var children = _a.children, data = _a.data, className = _a.className, style = _a.style;
    return (react_1["default"].createElement("div", { className: (0, clsx_1["default"])('jpk-accordion', className), style: style }, data ? data.map(AccordionItem) : children));
}
exports.Accordion = Accordion;
exports["default"] = Accordion;
//# sourceMappingURL=Accordion.js.map