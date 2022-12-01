import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './ThemeProvider';

export default function Providers({ children, config }: any) {
  const theme: any = config.theme || {};
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
