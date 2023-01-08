import React from 'react';
type Props = {
    current: number;
    className?: string;
    labels?: {
        first?: string;
        prev?: string;
        next?: string;
        last?: string;
    };
    pageSize: number;
    style?: React.CSSProperties;
    total: number;
    variant?: 'standard';
    onSelect?: (page: number) => void;
};
export declare function Pagination({ current, className, labels, pageSize, style, total, onSelect, }: Props): JSX.Element | null;
export default Pagination;
