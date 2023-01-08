import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
  target?: string;
};

export default function Portal({
  children,
  target = 'portal-root',
}: PortalProps) {
  const mount: any = document.getElementById(target);
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
}
