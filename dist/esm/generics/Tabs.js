import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// @todo: improve type definitions
export var Tab = function (_a) {
    var title = _a.title, selectedTab = _a.selectedTab, onClick = _a.onClick;
    var selectTabHandler = function () {
        onClick(title);
    };
    return (React.createElement("li", { className: clsx('jpk-tab__summary', selectedTab === title && 'jpk-tab--active'), onClick: selectTabHandler }, title));
};
export var Tabs = function (_a) {
    var children = _a.children;
    var _b = useState(null), selectedTab = _b[0], setSelectedTab = _b[1];
    useEffect(function () {
        setSelectedTab(children[0].props.title);
    }, [children]);
    var onClickTabItem = function (tabtitle) {
        setSelectedTab(tabtitle);
    };
    return (React.createElement("div", { className: 'jpk-tabs' },
        React.createElement("ol", { className: 'jpk-tab__header' }, children.map(function (child) {
            var title = child.props.title;
            return (React.createElement(Tab, { selectedTab: selectedTab, key: title, title: title, onClick: onClickTabItem }));
        })),
        React.createElement("div", { className: 'jpk-tab__content' }, children.map(function (child) {
            if (child.props.title !== selectedTab)
                return undefined;
            return child.props.children;
        }))));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map