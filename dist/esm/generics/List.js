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
export function List(_a) {
    var _b = _a.as, as = _b === void 0 ? 'ul' : _b, children = _a.children, className = _a.className, restProps = __rest(_a, ["as", "children", "className"]);
    return React.createElement(as, __assign({ className: clsx('jpk-list', className) }, restProps), children);
}
export function ListItem(_a) {
    var _b = _a.as, as = _b === void 0 ? 'li' : _b, children = _a.children, className = _a.className, restProps = __rest(_a, ["as", "children", "className"]);
    return React.createElement(as, __assign({ className: clsx('jpk-list__item', className) }, restProps), children);
}
export default List;
//# sourceMappingURL=List.js.map