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
import clsx from 'clsx';
import React from 'react';
// @todo: improve props to be exact
export var TableHeader = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("thead", __assign({}, restProps, { className: clsx('jpk-table__header', className) }), children));
};
export var TableRow = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("tr", __assign({}, restProps, { className: clsx('jpk-table__row', className) }), children));
};
export var TableColHead = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("th", __assign({}, restProps, { className: clsx('jpk-table__col-head', className) }), children));
};
export var TableBody = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("tbody", __assign({}, restProps, { className: clsx('jpk-table__body', className) }), children));
};
export var TableCell = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("td", __assign({}, restProps, { className: clsx('jpk-table__cell', className) }), children));
};
export var TableFooter = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (React.createElement("tfoot", __assign({}, restProps, { className: clsx('jpk-table__footer', className) }), children));
};
var TableCellWrapper = function (_a) {
    var as = _a.as, children = _a.children;
    return React.createElement(as, null, children);
};
export var Table = function (_a) {
    var children = _a.children, _b = _a.data, data = _b === void 0 ? null : _b, className = _a.className, restProps = __rest(_a, ["children", "data", "className"]);
    return (React.createElement("table", __assign({}, restProps, { className: clsx('jpk-table', className) }), data ? (React.createElement(React.Fragment, null,
        React.createElement(TableHeader, null,
            React.createElement(TableRow, null, data.columns.map(function (_a) {
                var label = _a.label;
                return (React.createElement(TableColHead, { key: label }, label));
            }))),
        React.createElement(TableBody, null, data.rows.map(function (row, index) { return (React.createElement(TableRow, { key: index }, row.map(function (_a) {
            var value = _a.value, wrapper = _a.wrapper;
            return (React.createElement(TableCell, { key: value }, wrapper ? (React.createElement(TableCellWrapper, { as: wrapper }, value)) : (value)));
        }))); })))) : (React.createElement(React.Fragment, null, children))));
};
export default Table;
//# sourceMappingURL=Table.js.map