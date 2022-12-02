import clsx from 'clsx';

export interface RangeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

export default function RangeInput({
  className,
  min = 0,
  max = 100,
  step = 0,
  value = 0,
  ...restProps
}: RangeInputProps) {
  return (
    <input
      {...restProps}
      className={clsx('jpk-range-input', className)}
      type='range'
      min={min}
      max={max}
      step={step}
      value={value}
    />
  );
}
