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
exports.Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var $ = __importStar(require("../generics"));
exports.Button = (0, styled_components_1["default"])($.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .jpk-btn {\n    &__small {\n      min-width: 64px;\n      height: 30px;\n      padding: 4px 5px;\n    }\n    &__medium {\n      min-width: 89px;\n      height: 36px;\n      padding: 6px 8px;\n    }\n    &__large {\n      min-width: 92px;\n      height: 42px;\n      padding: 8px 11px;\n    }\n  }\n"], ["\n  .jpk-btn {\n    &__small {\n      min-width: 64px;\n      height: 30px;\n      padding: 4px 5px;\n    }\n    &__medium {\n      min-width: 89px;\n      height: 36px;\n      padding: 6px 8px;\n    }\n    &__large {\n      min-width: 92px;\n      height: 42px;\n      padding: 8px 11px;\n    }\n  }\n"])));
exports["default"] = exports.Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map