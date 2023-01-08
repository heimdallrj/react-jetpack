"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
function Portal(_a) {
    var children = _a.children, _b = _a.target, target = _b === void 0 ? 'portal-root' : _b;
    var mount = document.getElementById(target);
    var el = document.createElement('div');
    (0, react_1.useEffect)(function () {
        mount.appendChild(el);
        return function () { return mount.removeChild(el); };
    }, [el, mount]);
    return (0, react_dom_1.createPortal)(children, el);
}
exports["default"] = Portal;
//# sourceMappingURL=Portal.js.map