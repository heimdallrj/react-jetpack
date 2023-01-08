import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { GlobalStyle } from './styles';

type Props = {
  children: React.ReactNode;
  theme: unknown;
};

const styles = {
  '--colors-primary': '#2b3a55',
  '--colors-secondary': '#ce7777',
  '--colors-tertiary': '#e8c4c4',
  '--colors-accent': '#f2e5e5',
  '--colors-error': 'rgb(253, 237, 237)',
  '--colors-warning': 'rgb(255, 244, 229)',
  '--colors-info': 'rgb(229, 246, 253)',
  '--colors-success': 'rgb(237, 247, 237)',
  '--colors-bg-primary': 'white',
  '--colors-bg-secondary': '#efefef',
  '--colors-text-primary': '#000000',
  '--colors-text-secondary': '#cccccc',
  '--colors-disabled': 'rgba(0, 0, 0, 0.12)',
  '--colors-a': 'blue',
  '--colors-a-hover': '#cccccc',
  '--fonts-primary': "'Montserrat', sans-serif",
  '--fonts-secondary': "'Montserrat', sans-serif",
  '--fonts-size-primary': '14px',
} as any;

export default function ThemeProvider({ children, theme }: Props) {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle {...styles} />
      {children}
    </StyledProvider>
  );
}
