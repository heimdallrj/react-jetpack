import React, { useState } from 'react';

// @todo: extends to change icons, aria-controls
// and other accessibility stuff

export type AccordionItemProps = {
  id?: string;
  summary: string;
  children: string | React.ReactNode;
};

export function AccordionItem({ id, summary, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section key={id ?? summary} className='jpk-accordion__section'>
      <div
        role='button'
        aria-expanded={isOpen}
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

export type AccordionProps = {
  children?: React.ReactNode;
  data?: AccordionItemProps[];
};

export function Accordion({ children, data }: AccordionProps) {
  return (
    <div className='jpk-accordion'>
      {data ? data.map(AccordionItem) : children}
    </div>
  );
}

export default Accordion;
