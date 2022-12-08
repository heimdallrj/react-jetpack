import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from '../types';

// @todo: stylis.js might be helpful to simplify the logic here.
// @todo: all `gap`, `margin*` etc should be able to pass values not only numbers but units along with.

const withUnit = (
  value: undefined | string | number,
  unit: CSSProperties.Unit
) => {
  if (!value) return undefined;
  if (typeof value === 'number') return `${value}${unit}`;
  return value;
};

export type BlockVariant =
  | 'aside'
  | 'article'
  | 'code'
  | 'details'
  | 'div'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'header'
  | 'li'
  | 'main'
  | 'mark'
  | 'nav'
  | 'ol'
  | 'pre'
  | 'section'
  | 'summary'
  | 'time'
  | 'ul';

export type Margin = 'auto' | number;

export interface BlockProps
  extends React.ButtonHTMLAttributes<
    | HTMLDivElement
    | HTMLDetailsElement
    | HTMLPreElement
    | HTMLSelectElement
    | HTMLTimeElement
  > {
  as?: BlockVariant;
  alignContent?: CSSProperties.AlignContent;
  alignItems?: CSSProperties.AlignItems;
  alignSelf?: CSSProperties.AlignSelf;
  columnGap?: number;
  display?: CSSProperties.Display;
  flex?: number | string;
  flexBasis?: CSSProperties.FlexBasis;
  flexDirection?: CSSProperties.FlexDirection;
  flexGrow?: CSSProperties.FlexGrow;
  flexShrink?: CSSProperties.FlexShrink;
  flexWrap?: CSSProperties.FlexWrap;
  gap?: number | string;
  height?: number;
  justifyContent?: CSSProperties.JustifyContent;
  justifySelf?: CSSProperties.JustifySelf;
  margin?: Margin;
  marginTop?: Margin;
  marginRight?: Margin;
  marginBottom?: Margin;
  marginLeft?: Margin;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  rowGap?: number;
  unit?: CSSProperties.Unit; // @todo: allow this to configure in theme level
  width?: number;
}

const Element = styled.div<any>`
  align-content: ${({ $alignContent }) => $alignContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-self: ${({ $alignSelf }) => $alignSelf};
  column-gap: ${(props) => props.$columnGap};
  display: ${({ $display }) => $display};
  flex: ${(props) => props.$flex}
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  gap: ${(props) => props.$gap};
  height: ${(props) => props.$height};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  justify-self: ${({ $justifySelf }) => $justifySelf};
  margin: ${(props) => props.$margin};
  margin-top: ${(props) => props.$marginTop};
  margin-right: ${(props) => props.$marginRight};
  margin-bottom: ${(props) => props.$marginBottom};
  margin-left: ${(props) => props.$marginLeft};
  margin-left: ${(props) => props.$marginLeft};
  max-height: ${(props) => props.$maxHeight};
  max-width: ${(props) => props.$maxWidth};
  min-height: ${(props) => props.$minHeight};
  min-width: ${(props) => props.$minWidth};
  padding: ${(props) => props.$padding};
  padding-top: ${(props) => props.$paddingTop};
  padding-right: ${(props) => props.$paddingRight};
  padding-bottom: ${(props) => props.$paddingBottom};
  padding-left: ${(props) => props.$paddingLeft};
  row-gap: ${(props) => props.$rowGap};
  width: ${(props) => props.$width};
`;

export default function Block({
  as = 'div',
  alignContent,
  alignItems,
  alignSelf,
  children,
  columnGap,
  display = undefined,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  height,
  rowGap,
  justifyContent,
  justifySelf,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  unit = 'px',
  width,
  ...restProps
}: BlockProps) {
  return (
    <Element
      {...restProps}
      as={as}
      $alignContent={alignContent}
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $columnGap={withUnit(columnGap, unit)}
      $display={display}
      $flex={flex}
      $flexBasis={flexBasis}
      $flexDirection={flexDirection}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexWrap={flexWrap}
      $gap={withUnit(gap, unit)}
      $height={withUnit(height, unit)}
      $justifyContent={justifyContent}
      $justifySelf={justifySelf}
      $margin={withUnit(margin, unit)}
      $marginTop={withUnit(marginTop, unit)}
      $marginRight={withUnit(marginRight, unit)}
      $marginBottom={withUnit(marginBottom, unit)}
      $marginLeft={withUnit(marginLeft, unit)}
      $maxHeight={withUnit(maxHeight, unit)}
      $maxWidth={withUnit(maxWidth, unit)}
      $minHeight={withUnit(minHeight, unit)}
      $minWidth={withUnit(minWidth, unit)}
      $padding={withUnit(padding, unit)}
      $paddingTop={withUnit(paddingTop, unit)}
      $paddingRight={withUnit(paddingRight, unit)}
      $paddingBottom={withUnit(paddingBottom, unit)}
      $paddingLeft={withUnit(paddingLeft, unit)}
      $rowGap={withUnit(rowGap, unit)}
      $width={withUnit(width, unit)}
    >
      {children}
    </Element>
  );
}
