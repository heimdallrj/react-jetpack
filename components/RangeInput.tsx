import clsx from 'clsx';
import { useConfig } from '../hooks';

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
  const { prefix }: any = useConfig();
  return (
    <input
      {...restProps}
      className={clsx(`${prefix}-range-input`, className)}
      type='range'
      min={min}
      max={max}
      step={step}
      value={value}
    />
  );
}
