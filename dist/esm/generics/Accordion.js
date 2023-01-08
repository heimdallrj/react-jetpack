import clsx from 'clsx';
import React, { useState } from 'react';
export function AccordionItem(_a) {
    var id = _a.id, summary = _a.summary, children = _a.children, className = _a.className, style = _a.style;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return (React.createElement("section", { key: id !== null && id !== void 0 ? id : summary, className: clsx('jpk-accordion__section', className), style: style },
        React.createElement("div", { role: 'button', "aria-expanded": isOpen, className: 'jpk-accordion__summary', onClick: function () { return setIsOpen(!isOpen); } },
            React.createElement("div", null, summary),
            React.createElement("div", null, isOpen ? '-' : '+')),
        isOpen && React.createElement("div", { className: 'jpk-accordion__content' }, children)));
}
export function Accordion(_a) {
    var children = _a.children, data = _a.data, className = _a.className, style = _a.style;
    return (React.createElement("div", { className: clsx('jpk-accordion', className), style: style }, data ? data.map(AccordionItem) : children));
}
export default Accordion;
//# sourceMappingURL=Accordion.js.map