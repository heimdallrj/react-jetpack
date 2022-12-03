import React from 'react';
import ReactContentLoader, { IContentLoaderProps } from 'react-content-loader';

export const Rect = ({
  x,
  y,
  rx,
  ry,
  width,
  height,
  ...restProps
}: React.SVGProps<SVGRectElement>) => (
  <rect
    {...restProps}
    x={x}
    y={y}
    rx={rx}
    ry={ry}
    width={width}
    height={height}
  />
);

export const Circle = ({
  cx,
  cy,
  r,
  ...restProps
}: React.SVGProps<SVGCircleElement>) => (
  <circle {...restProps} cx={cx} cy={cy} r={r} />
);

export default function ContentLoader({
  backgroundColor = '#f3f3f3',
  foregroundColor = '#ecebeb',
  speed = 2,
  width = '100%',
  height = '100%',
  viewBox = '0 0 400 160',
  children,
  ...restProps
}: IContentLoaderProps) {
  return (
    <ReactContentLoader
      {...restProps}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      speed={speed}
      height={height}
      viewBox={viewBox}
      width={width}
    >
      {children}
    </ReactContentLoader>
  );
}
