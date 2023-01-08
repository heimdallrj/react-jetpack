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
exports.Table = exports.TableFooter = exports.TableCell = exports.TableBody = exports.TableColHead = exports.TableRow = exports.TableHeader = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
// @todo: improve props to be exact
var TableHeader = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("thead", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__header', className) }), children));
};
exports.TableHeader = TableHeader;
var TableRow = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("tr", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__row', className) }), children));
};
exports.TableRow = TableRow;
var TableColHead = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("th", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__col-head', className) }), children));
};
exports.TableColHead = TableColHead;
var TableBody = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("tbody", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__body', className) }), children));
};
exports.TableBody = TableBody;
var TableCell = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("td", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__cell', className) }), children));
};
exports.TableCell = TableCell;
var TableFooter = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (react_1["default"].createElement("tfoot", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table__footer', className) }), children));
};
exports.TableFooter = TableFooter;
var TableCellWrapper = function (_a) {
    var as = _a.as, children = _a.children;
    return react_1["default"].createElement(as, null, children);
};
var Table = function (_a) {
    var children = _a.children, _b = _a.data, data = _b === void 0 ? null : _b, className = _a.className, restProps = __rest(_a, ["children", "data", "className"]);
    return (react_1["default"].createElement("table", __assign({}, restProps, { className: (0, clsx_1["default"])('jpk-table', className) }), data ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(exports.TableHeader, null,
            react_1["default"].createElement(exports.TableRow, null, data.columns.map(function (_a) {
                var label = _a.label;
                return (react_1["default"].createElement(exports.TableColHead, { key: label }, label));
            }))),
        react_1["default"].createElement(exports.TableBody, null, data.rows.map(function (row, index) { return (react_1["default"].createElement(exports.TableRow, { key: index }, row.map(function (_a) {
            var value = _a.value, wrapper = _a.wrapper;
            return (react_1["default"].createElement(exports.TableCell, { key: value }, wrapper ? (react_1["default"].createElement(TableCellWrapper, { as: wrapper }, value)) : (value)));
        }))); })))) : (react_1["default"].createElement(react_1["default"].Fragment, null, children))));
};
exports.Table = Table;
exports["default"] = exports.Table;
//# sourceMappingURL=Table.js.map