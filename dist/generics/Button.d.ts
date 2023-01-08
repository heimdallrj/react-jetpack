import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'reset' | 'submit';
    variant?: 'contained' | 'outlined' | 'text';
}
export declare function Button({ children, className, size, type, variant, ...restProps }: ButtonProps): JSX.Element;
export default Button;
