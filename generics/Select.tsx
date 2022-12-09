import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { omit } from '../utils/mixins';

interface Style extends CSSProperties {
  select?: CSSProperties;
  option?: CSSProperties;
  label?: CSSProperties;
}

export type Option = { label: string; value: string };

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  style?: Style;
}

export function Select({
  className,
  disabled,
  label,
  name,
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
      style={omit(style, 'select', 'option', 'label')}
    >
      {label && (
        <label
          className='jpk-select__label'
          htmlFor={name}
          style={style?.label}
        >
          {label}
        </label>
      )}
      <select
        className='jpk-select__menu'
        disabled={disabled}
        name={name}
        style={style?.select}
        value={value}
        {...restProps}
      >
        {options.map((opt: Option) => (
          <option
            className='jpk-select__menu__item'
            key={opt.value}
            value={opt.value}
            style={style?.option}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
