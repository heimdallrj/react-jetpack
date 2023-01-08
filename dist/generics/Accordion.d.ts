import React, { CSSProperties } from 'react';
export type AccordionItemProps = {
    children: string | React.ReactNode;
    className?: string;
    id?: string;
    style?: CSSProperties;
    summary: string;
};
export declare function AccordionItem({ id, summary, children, className, style, }: AccordionItemProps): JSX.Element;
export type AccordionProps = {
    children?: React.ReactNode;
    className?: string;
    data?: AccordionItemProps[];
    style?: CSSProperties;
};
export declare function Accordion({ children, data, className, style, }: AccordionProps): JSX.Element;
export default Accordion;
