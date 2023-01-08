import clsx from 'clsx';
import React from 'react';

// @todo: fix this properly

export interface RangeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function RangeInput({ className, ...restProps }: RangeInputProps) {
  return (
    <input
      {...restProps}
      className={clsx('jpk-range-input', className)}
      type='range'
    />
  );
}

export default RangeInput;
