"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.AccordionItem = exports.Accordion = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var $ = __importStar(require("../generics"));
exports.Accordion = (0, styled_components_1["default"])($.Accordion)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .jpk-accordion {\n    &__summary {\n      background-color: var(--colors-primary);\n      color: #ffffff;\n    }\n  }\n"], ["\n  .jpk-accordion {\n    &__summary {\n      background-color: var(--colors-primary);\n      color: #ffffff;\n    }\n  }\n"])));
exports.AccordionItem = (0, styled_components_1["default"])($.AccordionItem)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  line-height: 20px;\n"], ["\n  line-height: 20px;\n"])));
exports["default"] = exports.Accordion;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Accordion.js.map