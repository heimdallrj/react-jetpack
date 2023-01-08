"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Pagination = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
function Pagination(_a) {
    var current = _a.current, className = _a.className, _b = _a.labels, labels = _b === void 0 ? {
        first: 'First',
        prev: 'Prev',
        next: 'Next',
        last: 'Last'
    } : _b, pageSize = _a.pageSize, style = _a.style, total = _a.total, _c = _a.onSelect, onSelect = _c === void 0 ? function () { } : _c;
    var pages = Math.ceil(total / pageSize);
    var handlePrev = function () {
        onSelect(current - 1);
    };
    var handleNext = function () {
        onSelect(current + 1);
    };
    if (!total)
        return null;
    return (react_1["default"].createElement("div", { style: style, className: (0, clsx_1["default"])('jpk-pagination', className) },
        react_1["default"].createElement("button", { className: 'jpk-pagination__nav jpk-pagination__nav__first', disabled: current === 1, onClick: function () { return onSelect(1); } }, labels.first),
        react_1["default"].createElement("button", { className: 'jpk-pagination__nav jpk-pagination__nav__prev', disabled: current === 1, onClick: handlePrev }, labels.prev),
        Array.from(Array(pages).keys()).map(function (pageIndex) { return (react_1["default"].createElement("button", { key: pageIndex, className: (0, clsx_1["default"])('jpk-pagination__item', "jpk-pagination__item__".concat(pageIndex + 1), current === pageIndex + 1 && 'jpk-pagination__item--current'), onClick: function () { return onSelect(pageIndex + 1); } }, pageIndex + 1)); }),
        react_1["default"].createElement("button", { className: 'jpk-pagination__nav jpk-pagination__nav__next', disabled: current === pages, onClick: handleNext }, labels.next),
        react_1["default"].createElement("button", { className: 'jpk-pagination__nav jpk-pagination__nav__last', disabled: current === pages, onClick: function () { return onSelect(pages); } }, labels.last)));
}
exports.Pagination = Pagination;
exports["default"] = Pagination;
//# sourceMappingURL=Pagination.js.map