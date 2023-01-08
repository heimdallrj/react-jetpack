"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
// @todo: stylis.js might be helpful to simplify the logic here.
// @todo: all `gap`, `margin*` etc should be able to pass values not only numbers but units along with.
var withUnit = function (value, unit) {
    if (typeof value === 'string')
        return value;
    if (!value)
        return undefined;
    if (typeof value === 'number')
        return "".concat(value).concat(unit);
    return value;
};
var Element = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-content: ", ";\n  align-items: ", ";\n  align-self: ", ";\n  column-gap: ", ";\n  display: ", ";\n  flex: ", "\n  flex-basis: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-wrap: ", ";\n  gap: ", ";\n  height: ", ";\n  justify-content: ", ";\n  justify-self: ", ";\n  margin: ", ";\n  margin-top: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-left: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  padding: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  row-gap: ", ";\n  width: ", ";\n"], ["\n  align-content: ", ";\n  align-items: ", ";\n  align-self: ", ";\n  column-gap: ", ";\n  display: ", ";\n  flex: ", "\n  flex-basis: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-wrap: ", ";\n  gap: ", ";\n  height: ", ";\n  justify-content: ", ";\n  justify-self: ", ";\n  margin: ", ";\n  margin-top: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-left: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  padding: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  row-gap: ", ";\n  width: ", ";\n"])), function (_a) {
    var $alignContent = _a.$alignContent;
    return $alignContent;
}, function (_a) {
    var $alignItems = _a.$alignItems;
    return $alignItems;
}, function (_a) {
    var $alignSelf = _a.$alignSelf;
    return $alignSelf;
}, function (props) { return props.$columnGap; }, function (_a) {
    var $display = _a.$display;
    return $display;
}, function (props) { return props.$flex; }, function (_a) {
    var $flexBasis = _a.$flexBasis;
    return $flexBasis;
}, function (_a) {
    var $flexDirection = _a.$flexDirection;
    return $flexDirection;
}, function (_a) {
    var $flexGrow = _a.$flexGrow;
    return $flexGrow;
}, function (_a) {
    var $flexShrink = _a.$flexShrink;
    return $flexShrink;
}, function (_a) {
    var $flexWrap = _a.$flexWrap;
    return $flexWrap;
}, function (props) { return props.$gap; }, function (props) { return props.$height; }, function (_a) {
    var $justifyContent = _a.$justifyContent;
    return $justifyContent;
}, function (_a) {
    var $justifySelf = _a.$justifySelf;
    return $justifySelf;
}, function (props) { return props.$margin; }, function (props) { return props.$marginTop; }, function (props) { return props.$marginRight; }, function (props) { return props.$marginBottom; }, function (props) { return props.$marginLeft; }, function (props) { return props.$marginLeft; }, function (props) { return props.$maxHeight; }, function (props) { return props.$maxWidth; }, function (props) { return props.$minHeight; }, function (props) { return props.$minWidth; }, function (props) { return props.$padding; }, function (props) { return props.$paddingTop; }, function (props) { return props.$paddingRight; }, function (props) { return props.$paddingBottom; }, function (props) { return props.$paddingLeft; }, function (props) { return props.$rowGap; }, function (props) { return props.$width; });
function Block(_a) {
    var _b = _a.as, as = _b === void 0 ? 'div' : _b, alignContent = _a.alignContent, alignItems = _a.alignItems, alignSelf = _a.alignSelf, children = _a.children, columnGap = _a.columnGap, _c = _a.display, display = _c === void 0 ? undefined : _c, flex = _a.flex, flexBasis = _a.flexBasis, flexDirection = _a.flexDirection, flexGrow = _a.flexGrow, flexShrink = _a.flexShrink, flexWrap = _a.flexWrap, gap = _a.gap, height = _a.height, rowGap = _a.rowGap, justifyContent = _a.justifyContent, justifySelf = _a.justifySelf, margin = _a.margin, marginTop = _a.marginTop, marginRight = _a.marginRight, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, padding = _a.padding, paddingTop = _a.paddingTop, paddingRight = _a.paddingRight, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, _d = _a.unit, unit = _d === void 0 ? 'px' : _d, width = _a.width, restProps = __rest(_a, ["as", "alignContent", "alignItems", "alignSelf", "children", "columnGap", "display", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "gap", "height", "rowGap", "justifyContent", "justifySelf", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "maxHeight", "maxWidth", "minHeight", "minWidth", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "unit", "width"]);
    return (react_1["default"].createElement(Element, __assign({}, restProps, { as: as, "$alignContent": alignContent, "$alignItems": alignItems, "$alignSelf": alignSelf, "$columnGap": withUnit(columnGap, unit), "$display": display, "$flex": flex, "$flexBasis": flexBasis, "$flexDirection": flexDirection, "$flexGrow": flexGrow, "$flexShrink": flexShrink, "$flexWrap": flexWrap, "$gap": withUnit(gap, unit), "$height": withUnit(height, unit), "$justifyContent": justifyContent, "$justifySelf": justifySelf, "$margin": withUnit(margin, unit), "$marginTop": withUnit(marginTop, unit), "$marginRight": withUnit(marginRight, unit), "$marginBottom": withUnit(marginBottom, unit), "$marginLeft": withUnit(marginLeft, unit), "$maxHeight": withUnit(maxHeight, unit), "$maxWidth": withUnit(maxWidth, unit), "$minHeight": withUnit(minHeight, unit), "$minWidth": withUnit(minWidth, unit), "$padding": withUnit(padding, unit), "$paddingTop": withUnit(paddingTop, unit), "$paddingRight": withUnit(paddingRight, unit), "$paddingBottom": withUnit(paddingBottom, unit), "$paddingLeft": withUnit(paddingLeft, unit), "$rowGap": withUnit(rowGap, unit), "$width": withUnit(width, unit) }), children));
}
exports["default"] = Block;
var templateObject_1;
//# sourceMappingURL=Block.js.map