import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
  flexBasis?: number | 'auto' | 'initial' | 'inherit';
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
}

export default function Col({
  alignContent = 'stretch',
  alignItems = 'stretch',
  alignSelf = 'auto',
  children,
  className,
  flexBasis = 'auto',
  flexGrow = 0,
  flexShrink = 1,
  flexWrap = 'nowrap',
  gap = 0,
  justifyContent = 'flex-start',
  justifySelf = 'auto',
  style = {},
  ...restProps
}: Props) {
  return (
    <div
      {...restProps}
      className={className}
      style={{
        ...style,
        alignContent,
        alignItems,
        alignSelf,
        display: 'flex',
        flexBasis,
        flexDirection: 'column',
        flexGrow,
        flexShrink,
        flexWrap,
        gap: `${gap}px`,
        justifyContent,
        justifySelf,
      }}
    >
      {children}
    </div>
  );
}
