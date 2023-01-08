import React, { CSSProperties } from 'react';
interface Style extends CSSProperties {
    input?: CSSProperties;
    button?: CSSProperties;
}
export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    action?: string;
    className?: string;
    name?: string;
    style?: Style;
    onSubmit?: () => void;
}
export declare function SearchInput({ action, className, disabled, name, style, onSubmit, ...restProps }: SearchInputProps): JSX.Element;
export default SearchInput;
