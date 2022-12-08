import clsx from 'clsx';
import React from 'react';

// @todo: support for more variants
// @rfc: new prop: as, so can use button component as in anchor tag

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'outlined' | 'text';
}

export default function Button({
  children,
  className,
  size,
  type,
  variant,
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        'jpk-btn',
        variant && `jpk-btn__${variant}`,
        size && `jpk-btn__${size}`,
        className
      )}
    >
      {children}
    </button>
  );
}
