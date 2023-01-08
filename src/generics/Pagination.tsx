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

  const handlePrev = () => {
    onSelect(current - 1);
  };

  const handleNext = () => {
    onSelect(current + 1);
  };

  if (!total) return null;

  return (
    <div style={style} className={clsx('jpk-pagination', className)}>
      <button
        className='jpk-pagination__nav jpk-pagination__nav__first'
        disabled={current === 1}
        onClick={() => onSelect(1)}
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

      {Array.from(Array(pages).keys()).map((pageIndex: any) => (
        <button
          key={pageIndex}
          className={clsx(
            'jpk-pagination__item',
            `jpk-pagination__item__${pageIndex + 1}`,
            current === pageIndex + 1 && 'jpk-pagination__item--current'
          )}
          onClick={() => onSelect(pageIndex + 1)}
        >
          {pageIndex + 1}
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
        onClick={() => onSelect(pages)}
      >
        {labels.last}
      </button>
    </div>
  );
}

export default Pagination;
