import clsx from 'clsx';
import React from 'react';
import { useConfig } from '../hooks';

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
  const { prefix }: any = useConfig();
  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        `${prefix}-btn`,
        `${prefix}-btn__${variant}`,
        `${prefix}-btn__${variant}--${size}`,
        className
      )}
    >
      {children}
    </button>
  );
}
