import { useEffect } from 'react';
import { createPortal } from 'react-dom';
export default function Portal(_a) {
    var children = _a.children, _b = _a.target, target = _b === void 0 ? 'portal-root' : _b;
    var mount = document.getElementById(target);
    var el = document.createElement('div');
    useEffect(function () {
        mount.appendChild(el);
        return function () { return mount.removeChild(el); };
    }, [el, mount]);
    return createPortal(children, el);
}
//# sourceMappingURL=Portal.js.map