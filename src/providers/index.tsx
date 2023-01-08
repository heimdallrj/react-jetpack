import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './ThemeProvider';

export type ProviderProps = {
  children: React.ReactNode;
  theme?: unknown; // @todo: update once finalized
};

export default function Providers({ children, theme = {} }: ProviderProps) {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
