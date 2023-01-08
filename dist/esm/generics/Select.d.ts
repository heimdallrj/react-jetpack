import React, { CSSProperties } from 'react';
interface Style extends CSSProperties {
    select?: CSSProperties;
    option?: CSSProperties;
    label?: CSSProperties;
}
export type Option = {
    label: string;
    value: string;
};
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: Option[];
    style?: Style;
}
export declare function Select({ className, disabled, label, name, options, style, value, ...restProps }: SelectProps): JSX.Element;
export default Select;
