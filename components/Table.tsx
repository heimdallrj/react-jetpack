import clsx from 'clsx';
import styled from 'styled-components';

// @todo: implement this properly

export const Table = styled.table.attrs(({ className }) => ({
  className: clsx(className, 'jpk-table'),
}))``;
export const TableHeader = styled.thead``;
export const TableRow = styled.tr``;
export const TableColHead = styled.th``;
export const TableBody = styled.tbody``;
export const TableCell = styled.td``;
export const TableFooter = styled.tfoot``;
