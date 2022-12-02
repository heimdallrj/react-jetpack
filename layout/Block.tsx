import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from '../types';

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
  | 'main'
  | 'mark'
  | 'nav'
  | 'pre'
  | 'section'
  | 'summary'
  | 'time';

export interface BlockProps
  extends React.ButtonHTMLAttributes<
    | HTMLDivElement
    | HTMLDetailsElement
    | HTMLPreElement
    | HTMLSelectElement
    | HTMLTimeElement
  > {
  alignContent?: CSSProperties.AlignContent;
  alignItems?: CSSProperties.AlignItems;
  alignSelf?: CSSProperties.AlignSelf;
  columnGap?: number;
  display?: CSSProperties.Display;
  flexBasis?: CSSProperties.FlexBasis;
  flexDirection?: CSSProperties.FlexDirection;
  flexGrow?: CSSProperties.FlexGrow;
  flexShrink?: CSSProperties.FlexShrink;
  flexWrap?: CSSProperties.FlexWrap;
  gap?: number;
  justifyContent?: CSSProperties.JustifyContent;
  justifySelf?: CSSProperties.JustifySelf;
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  rowGap?: number;
  unit?: CSSProperties.Units; // @todo: allow this to configure in theme level
  variant?: BlockVariant;
}

const Element = styled.div<any>`
  align-content: ${({ $alignContent }) => $alignContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-self: ${({ $alignSelf }) => $alignSelf};
  ${({ $columnGap, $unit }) =>
    $columnGap && `column-gap: ${$columnGap}${$unit};`}
  display: ${({ $display }) => $display};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  ${({ $gap, $unit }) => $gap && `gap: ${$gap}${$unit};`}
  justify-content: ${({ $justifyContent }) => $justifyContent};
  justify-self: ${({ $justifySelf }) => $justifySelf};
  ${({ $margin, $unit }) => $margin && `margin: ${$margin}${$unit};`}
  ${({ $marginTop, $unit }) =>
    $marginTop && `margin-top: ${$marginTop}${$unit};`}
  ${({ $marginRight, $unit }) =>
    $marginRight && `margin-right: ${$marginRight}${$unit};`}
  ${({ $marginBottom, $unit }) =>
    $marginBottom && `margin-bottom: ${$marginBottom}${$unit};`}
  ${({ $marginLeft, $unit }) =>
    $marginLeft && `margin-left: ${$marginLeft}${$unit};`}
  ${({ $padding, $unit }) => $padding && `padding: ${$padding}${$unit};`}
  ${({ $paddingTop, $unit }) =>
    $paddingTop && `padding-top: ${$paddingTop}${$unit};`}
  ${({ $paddingRight, $unit }) =>
    $paddingRight && `padding-right: ${$paddingRight}${$unit};`}
  ${({ $paddingBottom, $unit }) =>
    $paddingBottom && `padding-bottom: ${$paddingBottom}${$unit};`}
  ${({ $paddingLeft, $unit }) =>
    $paddingLeft && `padding-left: ${$paddingLeft}${$unit};`}
    ${({ $rowGap, $unit }) => $rowGap && `row-gap: ${$rowGap}${$unit};`}
`;

export default function Block({
  alignContent,
  alignItems,
  alignSelf,
  children,
  columnGap,
  display = undefined,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  rowGap,
  justifyContent,
  justifySelf,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  unit = 'px',
  variant = 'div',
  ...restProps
}: BlockProps) {
  return (
    <Element
      {...restProps}
      as={variant}
      $alignContent={alignContent}
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $columnGap={columnGap}
      $display={display}
      $flexBasis={flexBasis}
      $flexDirection={flexDirection}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexWrap={flexWrap}
      $gap={gap}
      $justifyContent={justifyContent}
      $justifySelf={justifySelf}
      $marginmargin
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $padding={padding}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $rowGap={rowGap}
      $unit={unit}
    >
      {children}
    </Element>
  );
}
