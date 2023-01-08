import React from 'react';
export interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export declare function RangeInput({ className, ...restProps }: RangeInputProps): JSX.Element;
export default RangeInput;
