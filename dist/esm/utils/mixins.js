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
// Omit propery from an object
export function omit(obj) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    if (!obj)
        return undefined;
    var _obj = __assign({}, obj);
    props.forEach(function (prop) {
        delete _obj[prop];
    });
    return _obj;
}
//# sourceMappingURL=mixins.js.map