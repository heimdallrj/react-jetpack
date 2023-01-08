import clsx from 'clsx';
import React, { CSSProperties, useState } from 'react';

// @todo: extends to change icons, aria-controls
// and other accessibility stuff
// @todo: simplify the html markup

export type AccordionItemProps = {
  children: string | React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  summary: string;
};

export function AccordionItem({
  id,
  summary,
  children,
  className,
  style,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      key={id ?? summary}
      className={clsx('jpk-accordion__section', className)}
      style={style}
    >
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
  className?: string;
  data?: AccordionItemProps[];
  style?: CSSProperties;
};

export function Accordion({
  children,
  data,
  className,
  style,
}: AccordionProps) {
  return (
    <div className={clsx('jpk-accordion', className)} style={style}>
      {data ? data.map(AccordionItem) : children}
    </div>
  );
}

export default Accordion;
