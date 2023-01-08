import React from 'react';
export type ProviderProps = {
    children: React.ReactNode;
    theme?: unknown;
};
export default function Providers({ children, theme }: ProviderProps): JSX.Element;
