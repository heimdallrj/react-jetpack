import clsx from 'clsx';
import { CSSProperties } from 'react';
import { omit } from '../utils/mixins';

interface Style extends CSSProperties {
  input?: CSSProperties;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  style?: Style;
  value?: string;
}

export default function Checkbox({
  checked = false,
  className,
  disabled = false,
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
      style={omit(style, 'input')}
    >
      <input
        {...restProps}
        checked={checked}
        className='jpk-checkbox__input'
        disabled={disabled}
        name={name}
        // style={style?.input}
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
