import clsx from 'clsx';
import React from 'react';

// @todo: implement `variant`

export type AlertProps = {
  children: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
};

export function Alert({ children, severity }: AlertProps) {
  return (
    <div
      role='alert'
      className={clsx('jpk-alert', severity && `jpk-alert--${severity}`)}
    >
      {children}
    </div>
  );
}

export default Alert;
