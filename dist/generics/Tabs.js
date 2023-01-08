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
exports.Tabs = exports.Tab = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importStar(require("react"));
// @todo: improve type definitions
var Tab = function (_a) {
    var title = _a.title, selectedTab = _a.selectedTab, onClick = _a.onClick;
    var selectTabHandler = function () {
        onClick(title);
    };
    return (react_1["default"].createElement("li", { className: (0, clsx_1["default"])('jpk-tab__summary', selectedTab === title && 'jpk-tab--active'), onClick: selectTabHandler }, title));
};
exports.Tab = Tab;
var Tabs = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(null), selectedTab = _b[0], setSelectedTab = _b[1];
    (0, react_1.useEffect)(function () {
        setSelectedTab(children[0].props.title);
    }, [children]);
    var onClickTabItem = function (tabtitle) {
        setSelectedTab(tabtitle);
    };
    return (react_1["default"].createElement("div", { className: 'jpk-tabs' },
        react_1["default"].createElement("ol", { className: 'jpk-tab__header' }, children.map(function (child) {
            var title = child.props.title;
            return (react_1["default"].createElement(exports.Tab, { selectedTab: selectedTab, key: title, title: title, onClick: onClickTabItem }));
        })),
        react_1["default"].createElement("div", { className: 'jpk-tab__content' }, children.map(function (child) {
            if (child.props.title !== selectedTab)
                return undefined;
            return child.props.children;
        }))));
};
exports.Tabs = Tabs;
exports["default"] = exports.Tabs;
//# sourceMappingURL=Tabs.js.map