import clsx from 'clsx';

// @todo: fix this properly

export interface RangeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function RangeInput({
  className,
  ...restProps
}: RangeInputProps) {
  return (
    <input
      {...restProps}
      className={clsx('jpk-range-input', className)}
      type='range'
    />
  );
}
