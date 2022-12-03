import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyle } from './globalStyles';
import './normalize.css';

const colors = {
  '--b1-color': '#eff5fb',
  '--b2-color': '#d8e7f4',
  '--b3-color': '#c0d8ec',
  '--b4-color': '#91bbdc',
  '--b5-color': '#629ecd',
} as React.CSSProperties;

type Props = {
  children: React.ReactNode;
  theme: any;
};

export default function ThemeProvider({ children, theme }: Props) {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle {...theme} {...colors} />
      {children}
    </StyledProvider>
  );
}
