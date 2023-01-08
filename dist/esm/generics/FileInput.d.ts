import React from 'react';
export interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export declare function FileInput({ className, ...restProps }: FileInputProps): JSX.Element;
export default FileInput;
