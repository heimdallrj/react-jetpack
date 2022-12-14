import clsx from 'clsx';
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
  variant?: 'standard'; // @todo:
  onSelect?: (page: number) => void;
};

export function Pagination({
  current,
  className,
  labels = {
    first: 'First',
    prev: 'Prev',
    next: 'Next',
    last: 'Last',
  },
  pageSize,
  style,
  total,
  onSelect = () => {},
}: Props) {
  const pages = Math.ceil(total / pageSize);

  const select = (page: number) => onSelect(page);

  const handlePrev = () => {
    select(current - 1);
  };

  const handleNext = () => {
    select(current + 1);
  };

  return (
    <div style={style} className={clsx('jpk-pagination', className)}>
      <button
        className='jpk-pagination__nav jpk-pagination__nav__first'
        disabled={current === 1}
        onClick={() => select(1)}
      >
        {labels.first}
      </button>
      <button
        className='jpk-pagination__nav jpk-pagination__nav__prev'
        disabled={current === 1}
        onClick={handlePrev}
      >
        {labels.prev}
      </button>

      {Array.from(Array(pages).keys()).map((index: any) => (
        <button
          key={index}
          className={clsx(
            'jpk-pagination__item',
            `jpk-pagination__item__${index + 1}`,
            current === index + 1 && 'jpk-pagination__item--current'
          )}
          onClick={() => select(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className='jpk-pagination__nav jpk-pagination__nav__next'
        disabled={current === pages}
        onClick={handleNext}
      >
        {labels.next}
      </button>
      <button
        className='jpk-pagination__nav jpk-pagination__nav__last'
        disabled={current === pages}
        onClick={() => select(pages)}
      >
        {labels.last}
      </button>
    </div>
  );
}

export default Pagination;
