import clsx from 'clsx';

export function Pagination({
  noOfPages = 20,
  current = 1,
  className,
  labels = {
    first: 'First',
    prev: 'Previous',
    next: 'Next',
    last: 'Last',
  },
  onSelect = () => {},
}: any) {
  return (
    <ul className={clsx('jpk-pagination', className)}>
      {noOfPages > 2 && (
        <>
          <li
            className='jpk-pagination__item__first'
            onSelect={() => onSelect(1)}
          >
            {labels.first}
          </li>
          <li
            className='jpk-pagination__item__prev'
            onSelect={() => onSelect(current - 1)}
          >
            {labels.prev}
          </li>
        </>
      )}

      {Array.from(Array(noOfPages).keys()).map((index: any) => (
        <li
          key={index}
          className={clsx(
            'jpk-pagination__item',
            `jpk-pagination__item__${index + 1}`,
            current === index + 1 && 'jpk-pagination__item--current'
          )}
          onSelect={() => onSelect(index + 1)}
        >
          {index + 1}
        </li>
      ))}

      {noOfPages > 2 && (
        <>
          <li
            className='jpk-pagination__item__next'
            onSelect={() => onSelect(current + 1)}
          >
            {labels.next}
          </li>
          <li
            className='jpk-pagination__item__last'
            onSelect={() => onSelect(noOfPages)}
          >
            {labels.last}
          </li>
        </>
      )}
    </ul>
  );
}

export default Pagination;
