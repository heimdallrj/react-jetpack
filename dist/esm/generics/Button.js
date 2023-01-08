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
export function Button(_a) {
    var children = _a.children, className = _a.className, _b = _a.size, size = _b === void 0 ? 'medium' : _b, type = _a.type, variant = _a.variant, restProps = __rest(_a, ["children", "className", "size", "type", "variant"]);
    return (React.createElement("button", __assign({}, restProps, { type: type, className: clsx('jpk-btn', variant && "jpk-btn__".concat(variant), size && "jpk-btn__".concat(size), className) }), children));
}
export default Button;
//# sourceMappingURL=Button.js.map