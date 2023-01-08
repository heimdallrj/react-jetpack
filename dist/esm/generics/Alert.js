import clsx from 'clsx';
import React from 'react';
export function Alert(_a) {
    var children = _a.children, severity = _a.severity;
    return (React.createElement("div", { role: 'alert', className: clsx('jpk-alert', severity && "jpk-alert--".concat(severity)) }, children));
}
export default Alert;
//# sourceMappingURL=Alert.js.map