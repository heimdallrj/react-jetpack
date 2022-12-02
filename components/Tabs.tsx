import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const Tab = ({ title, selectedTab, onClick }: any) => {
  const selectTabHandler = () => {
    onClick(title);
  };

  return (
    <li
      className={clsx(
        'jpk-tab__button',
        selectedTab === title && 'jpk-tab--active'
      )}
      onClick={selectTabHandler}
    >
      {title}
    </li>
  );
};

export const Tabs = ({ children }: any) => {
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    setSelectedTab(children[0].props.title);
  }, [children]);

  const onClickTabItem = (tabtitle: any) => {
    setSelectedTab(tabtitle);
  };

  return (
    <div className='jpk-tabs'>
      <ol className='jpk-tab'>
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
