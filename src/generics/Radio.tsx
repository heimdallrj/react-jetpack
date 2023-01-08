import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { omit } from '../utils/mixins';

interface Style extends CSSProperties {
  input?: CSSProperties;
  label?: CSSProperties;
}

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  style?: Style;
  value?: string;
}

export function Radio({
  checked = false,
  className,
  disabled = false,
  label,
  name,
  style,
  value,
  ...restProps
}: RadioProps) {
  return (
    <div
      className={clsx(
        'jpk-radio',
        checked && 'jpk-radio--checked',
        disabled && 'jpk-radio--disabled',
        className
      )}
      style={omit(style, 'input', 'label')}
    >
      <input
        {...restProps}
        checked={checked}
        className='jpk-radio__input'
        disabled={disabled}
        name={name}
        style={style?.input}
        type='radio'
        value={value}
      />
      {label && (
        <label htmlFor={name} className='jpk-radio__label' style={style?.label}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Radio;
