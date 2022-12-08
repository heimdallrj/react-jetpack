import clsx from 'clsx';
import React from 'react';

export type TextVariant =
  | 'b'
  | 'big'
  | 'del'
  | 'div'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'i'
  | 'ins'
  | 'mark'
  | 'p'
  | 'span'
  | 'sub'
  | 'sup'
  | 'small'
  | 'strong'
  | 'u';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TextVariant;
}

export default function Text({
  children,
  variant = 'p',
  className,
  ...restProps
}: Props) {
  return React.createElement(
    variant,
    {
      ...restProps,
      className: clsx(
        'jpk-typography',
        `jpk-typography__${variant}`,
        className
      ),
    },
    children
  );
}
