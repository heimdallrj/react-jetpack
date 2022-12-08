import clsx from 'clsx';
import { CSSProperties } from 'react';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  name?: string;
  style?: CSSProperties;
  value?: string;
}

export default function Checkbox({
  checked = false,
  className,
  disabled = false,
  inputStyle,
  label,
  name,
  style,
  value,
  ...restProps
}: CheckboxProps) {
  return (
    <div
      className={clsx(
        'jpk-checkbox',
        checked && 'jpk-checkbox--checked',
        disabled && 'jpk-checkbox--disabled',
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        checked={checked}
        className='jpk-checkbox__input'
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='checkbox'
        value={value}
      />
      {label && (
        <label className='jpk-checkbox__label' htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
