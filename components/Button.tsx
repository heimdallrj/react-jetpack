import clsx from 'clsx';
import React from 'react';

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
  size = 'medium',
  type = 'button',
  variant = 'contained',
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        'jpk-btn',
        `jpk-btn__${variant}`,
        `jpk-btn__${variant}--${size}`,
        className
      )}
    >
      {children}
    </button>
  );
}
