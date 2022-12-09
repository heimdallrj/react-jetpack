import clsx from 'clsx';
import React from 'react';

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ol' | 'ul';
}

export function List({
  as = 'ul',
  children,
  className,
  ...restProps
}: ListProps) {
  return React.createElement(
    as,
    {
      className: clsx('jpk-list', className),
      ...restProps,
    },
    children
  );
}

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export function ListItem({ children, className, ...restProps }: ListItemProps) {
  return (
    <li {...restProps} className={clsx('jpk-list__item', className)}>
      {children}
    </li>
  );
}

export default List;
