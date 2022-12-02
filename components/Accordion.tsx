import React, { useState } from 'react';

// @todo: allow change icons

export type AccordionItemProps = {
  children: string | React.ReactNode;
  summary: string;
};

export function AccordionItem({ children, summary }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='jpk-accordion__section'>
      <div
        className='jpk-accordion__summary'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{summary}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className='jpk-accordion__content'>{children}</div>}
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
  return (
    <div className='jpk-accordion'>
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
