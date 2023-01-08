import React, { CSSProperties } from 'react';
interface Style extends CSSProperties {
    input?: CSSProperties;
    label?: CSSProperties;
}
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    style?: Style;
    value?: string;
}
export declare function Radio({ checked, className, disabled, label, name, style, value, ...restProps }: RadioProps): JSX.Element;
export default Radio;
