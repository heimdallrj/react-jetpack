import React, { CSSProperties } from 'react';
interface Style extends CSSProperties {
    input?: CSSProperties;
    label?: CSSProperties;
}
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    style?: Style;
    value?: string;
}
export declare function Checkbox({ checked, className, disabled, label, name, style, value, ...restProps }: CheckboxProps): JSX.Element;
export default Checkbox;
