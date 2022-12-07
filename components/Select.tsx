import clsx from 'clsx';
import { CSSProperties } from 'react';

export type Option = { label: string; value: string };

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  inputStyle?: CSSProperties;
  options: Option[];
  style?: CSSProperties;
}

export default function Select({
  className,
  disabled,
  label,
  name,
  inputStyle,
  options = [],
  style,
  value,
  ...restProps
}: SelectProps) {
  return (
    <div
      className={clsx(
        'jpk-select',
        disabled && 'jpk-select--disabled',
        className
      )}
      style={style}
    >
      {label && (
        <label className='jpk-select__label' htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className='jpk-select__menu'
        disabled={disabled}
        name={name}
        style={inputStyle}
        value={value}
        {...restProps}
      >
        {options.map((opt: Option) => (
          <option
            className='jpk-select__menu__item'
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
