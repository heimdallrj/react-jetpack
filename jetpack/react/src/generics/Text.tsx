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

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TextVariant;
}

export function Text({
  children,
  as = 'p',
  className,
  ...restProps
}: TextProps) {
  return React.createElement(
    as,
    {
      ...restProps,
      className: clsx('jpk-typography', `jpk-typography__${as}`, className),
    },
    children
  );
}

export default Text;
