import clsx from 'clsx';
import styled from 'styled-components';
import JBlock, { BlockVariant } from '../layout/Block';

const TableBlock = styled.table.attrs(({ className }) => ({
  className: clsx(className, 'jpk-table'),
}))``;

export const TableHeader = styled.thead``;
export const TableRow = styled.tr``;
export const TableColHead = styled.th``;
export const TableBody = styled.tbody``;
export const TableCell = styled.td``;
export const TableFooter = styled.tfoot``;

// @todo: update type definitions properly
type Column = { label: string };
type Row = { value: string; wrapper?: BlockVariant };
type Rows = Row[];

export type TableProps = {
  children?: React.ReactNode;
  data?: null | { columns: Column[]; rows: Rows[] };
};

export const Table = ({ children, data = null }: TableProps) => (
  <TableBlock>
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
                  {wrapper ? <JBlock variant={wrapper}>{value}</JBlock> : value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </>
    ) : (
      <>{children}</>
    )}
  </TableBlock>
);
