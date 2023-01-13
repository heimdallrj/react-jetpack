import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { omit } from '../utils/mixins';

interface Style extends CSSProperties {
  input?: CSSProperties;
  label?: CSSProperties;
}

export type InputTypes =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  style?: Style;
  type?: InputTypes;
  value?: string;
}

export function TextInput({
  className,
  disabled = false,
  label,
  name,
  style,
  type = 'text',
  value,
  ...restProps
}: TextInputProps) {
  return (
    <div
      className={clsx(
        'jpk-text-input',
        disabled && 'jpk-text-input--disabled',
        className
      )}
      style={omit(style, 'input', 'label')}
    >
      {label && (
        <label
          htmlFor={name}
          className='jpk-text-input__label'
          style={style?.label}
        >
          {label}
        </label>
      )}
      <input
        {...restProps}
        className='jpk-text-input__input'
        disabled={disabled}
        name={name}
        style={style?.input}
        type={type}
        value={value}
      />
    </div>
  );
}

export default TextInput;
