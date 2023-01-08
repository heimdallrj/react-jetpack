import React, { CSSProperties } from 'react';
interface Style extends CSSProperties {
    input?: CSSProperties;
    label?: CSSProperties;
}
export type InputTypes = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    style?: Style;
    type?: InputTypes;
    value?: string;
}
export declare function TextInput({ className, disabled, label, name, style, type, value, ...restProps }: TextInputProps): JSX.Element;
export default TextInput;
