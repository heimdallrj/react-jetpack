import clsx from 'clsx';
import React from 'react';

// @todo: support for more variants

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
        size && `jpk-btn--${size}`,
        className
      )}
    >
      {children}
    </button>
  );
}
