import React from 'react';
export type PortalProps = {
    children: React.ReactNode;
    target?: string;
};
export default function Portal({ children, target, }: PortalProps): React.ReactPortal;
