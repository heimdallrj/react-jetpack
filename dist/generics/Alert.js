"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Alert = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
function Alert(_a) {
    var children = _a.children, severity = _a.severity;
    return (react_1["default"].createElement("div", { role: 'alert', className: (0, clsx_1["default"])('jpk-alert', severity && "jpk-alert--".concat(severity)) }, children));
}
exports.Alert = Alert;
exports["default"] = Alert;
//# sourceMappingURL=Alert.js.map