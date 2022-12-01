import React from 'react';

interface Props
  extends React.ButtonHTMLAttributes<
    | HTMLDivElement
    | HTMLDetailsElement
    | HTMLPreElement
    | HTMLSelectElement
    | HTMLTimeElement
  > {
  alignContent?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  alignSelf?:
    | 'auto'
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  children: React.ReactNode;
  className?: string;
  display?:
    | 'inline'
    | 'block'
    | 'contents'
    | 'flex'
    | 'grid'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-table'
    | 'list-item'
    | 'run-in'
    | 'table'
    | 'table-caption'
    | 'table-column-group'
    | 'table-header-group'
    | 'table-footer-group'
    | 'table-row-group'
    | 'table-cell'
    | 'table-column'
    | 'table-row'
    | 'none'
    | 'initial'
    | 'inherit';
  flexBasis?: number | 'auto' | 'initial' | 'inherit';
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit';
  flexGrow?: number | 'initial' | 'inherit';
  flexShrink?: number | 'initial' | 'inherit';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  justifySelf?:
    | 'auto'
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  style?: React.CSSProperties;
  variant?:
    | 'aside'
    | 'article'
    | 'code'
    | 'details'
    | 'div'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'mark'
    | 'nav'
    | 'pre'
    | 'section'
    | 'summary'
    | 'time';
}

export default function Block({
  alignContent,
  alignItems,
  alignSelf,
  children,
  className,
  display,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  justifyContent,
  justifySelf,
  style = {},
  variant = 'div',
  ...restProps
}: Props) {
  return React.createElement(
    variant,
    {
      ...restProps,
      className,
      style: {
        ...style,
        alignContent,
        alignItems,
        alignSelf,
        display,
        flexBasis,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        gap,
        justifyContent,
        justifySelf,
      },
    },
    children
  );
}
