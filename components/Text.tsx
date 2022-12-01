import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?:
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
}

export default function Text({ children, variant = 'p', ...restProps }: Props) {
  return React.createElement(variant, restProps, children);
}
