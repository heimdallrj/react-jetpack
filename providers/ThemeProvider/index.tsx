import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyle } from './globalStyles';
import './normalize.css';

type Props = {
  children: React.ReactNode;
  theme: any;
};

export default function ThemeProvider({ children, theme }: Props) {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle {...theme} />
      {children}
    </StyledProvider>
  );
}
