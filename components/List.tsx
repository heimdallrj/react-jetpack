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

export function ListItem({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...restProps} className={clsx('jpk-list-item', className)}>
      {children}
    </li>
  );
}

export default List;
