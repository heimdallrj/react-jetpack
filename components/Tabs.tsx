import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useConfig } from '../hooks';

export const Tab = ({ title, selectedTab, onClick }: any) => {
  const { prefix }: any = useConfig();

  const selectTabHandler = () => {
    onClick(title);
  };

  return (
    <li
      className={clsx(
        `${prefix}-tab__button`,
        selectedTab === title && `${prefix}-tab--active`
      )}
      onClick={selectTabHandler}
    >
      {title}
    </li>
  );
};

export const Tabs = ({ children }: any) => {
  const { prefix }: any = useConfig();

  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    setSelectedTab(children[0].props.title);
  }, [children]);

  const onClickTabItem = (tabtitle: any) => {
    setSelectedTab(tabtitle);
  };

  return (
    <div className={`${prefix}-tabs`}>
      <ol className={`${prefix}-tab`}>
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
      <div className={`${prefix}-tab__content`}>
        {children.map((child: any) => {
          if (child.props.title !== selectedTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};
