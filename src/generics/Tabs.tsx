import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

// @todo: improve type definitions

export const Tab = ({ title, selectedTab, onClick }: any) => {
  const selectTabHandler = () => {
    onClick(title);
  };

  return (
    <li
      className={clsx(
        'jpk-tab__summary',
        selectedTab === title && 'jpk-tab--active'
      )}
      onClick={selectTabHandler}
    >
      {title}
    </li>
  );
};

export type TabsProps = {
  children: React.ReactNode | any;
};

export const Tabs = ({ children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    setSelectedTab(children[0].props.title);
  }, [children]);

  const onClickTabItem = (tabtitle: any) => {
    setSelectedTab(tabtitle);
  };

  return (
    <div className='jpk-tabs'>
      <ol className='jpk-tab__header'>
        {children.map((child: any) => {
          const { title } = child.props;

          return (
            <Tab
              selectedTab={selectedTab}
              key={title}
              title={title}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className='jpk-tab__content'>
        {children.map((child: any) => {
          if (child.props.title !== selectedTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
