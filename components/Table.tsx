import clsx from 'clsx';
import React from 'react';
import { BlockVariant } from '../layout/Block';

// @todo: improve props to be exact

export const TableHeader = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <thead {...restProps} className={clsx('jpk-table__header', className)}>
    {children}
  </thead>
);

export const TableRow = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <tr {...restProps} className={clsx('jpk-table__row', className)}>
    {children}
  </tr>
);

export const TableColHead = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <th {...restProps} className={clsx('jpk-table__col-head', className)}>
    {children}
  </th>
);

export const TableBody = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <tbody {...restProps} className={clsx('jpk-table__body', className)}>
    {children}
  </tbody>
);

export const TableCell = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <td {...restProps} className={clsx('jpk-table__cell', className)}>
    {children}
  </td>
);

export const TableFooter = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<any>) => (
  <tfoot {...restProps} className={clsx('jpk-table__footer', className)}>
    {children}
  </tfoot>
);

const TableCellWrapper = ({ as, children }: any) =>
  React.createElement(as, null, children);

// @todo: update type definitions properly
type Column = { label: string };
type Row = { value: string; wrapper?: BlockVariant };
type Rows = Row[];

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  data?: null | { columns: Column[]; rows: Rows[] };
}

export const Table = ({
  children,
  data = null,
  className,
  ...restProps
}: TableProps) => (
  <table {...restProps} className={clsx('jpk-table', className)}>
    {data ? (
      <>
        <TableHeader>
          <TableRow>
            {data.columns.map(({ label }: Column) => (
              <TableColHead key={label}>{label}</TableColHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row: Row[], index: number) => (
            <TableRow key={index}>
              {row.map(({ value, wrapper }: Row) => (
                <TableCell key={value}>
                  {wrapper ? (
                    <TableCellWrapper as={wrapper}>{value}</TableCellWrapper>
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </>
    ) : (
      <>{children}</>
    )}
  </table>
);
