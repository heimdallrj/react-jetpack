/// <reference types="react" />
export type AlertProps = {
    children: string;
    severity?: 'error' | 'warning' | 'info' | 'success';
};
export declare function Alert({ children, severity }: AlertProps): JSX.Element;
export default Alert;
