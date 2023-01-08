import React from 'react';
import { BlockVariant } from '../layout/Block';
export declare const TableHeader: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
export declare const TableRow: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
export declare const TableColHead: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
export declare const TableBody: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
export declare const TableCell: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
export declare const TableFooter: ({ children, className, ...restProps }: React.HTMLAttributes<any>) => JSX.Element;
type Column = {
    label: string;
};
type Row = {
    value: string;
    wrapper?: BlockVariant;
};
type Rows = Row[];
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
    data?: null | {
        columns: Column[];
        rows: Rows[];
    };
}
export declare const Table: ({ children, data, className, ...restProps }: TableProps) => JSX.Element;
export default Table;
