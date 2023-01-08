import clsx from 'clsx';
import React from 'react';

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'div' | 'ol' | 'ul';
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

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  as?: 'li' | 'div';
}

export function ListItem({
  as = 'li',
  children,
  className,
  ...restProps
}: ListItemProps) {
  return React.createElement(
    as,
    {
      className: clsx('jpk-list__item', className),
      ...restProps,
    },
    children
  );
}

export default List;
