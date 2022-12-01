import React, { useState } from 'react';
import { useConfig } from '../hooks';

export type AccordionItemProps = {
  children: string | React.ReactNode;
  summary: string;
};

export function AccordionItem({ children, summary }: AccordionItemProps) {
  const { prefix }: any = useConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`${prefix}-accordion__section`}>
      <div
        className={`${prefix}-accordion__summary`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{summary}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className={`${prefix}-accordion__content`}>{children}</div>
      )}
    </section>
  );
}

export type AccordionDataProps = {
  id?: string;
  summary: string;
  content: string | React.ReactNode;
};

export type AccordionProps = {
  children: React.ReactNode;
  data?: AccordionDataProps[];
};

export function Accordion({ children, data }: AccordionProps) {
  const { prefix }: any = useConfig();

  return (
    <div className={`${prefix}-accordion`}>
      {data
        ? data.map(({ id, summary, content }: AccordionDataProps) => (
            <AccordionItem key={id ?? summary} summary={summary}>
              {content}
            </AccordionItem>
          ))
        : children}
    </div>
  );
}

export default Accordion;
