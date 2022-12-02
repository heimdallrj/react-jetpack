import clsx from 'clsx';
import { CSSProperties } from 'react';

enum LabelPosMap {
  right = 'row',
  bottom = 'column',
  left = 'row-reverse',
  top = 'column-reverse',
}

type InputTypes =
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

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  labelPosition?: 'right' | 'bottom' | 'left' | 'top';
  name?: string;
  style?: CSSProperties;
  type?: InputTypes;
  value?: string;
}

export default function TextInput({
  className,
  disabled = false,
  inputStyle,
  label,
  labelPosition = 'right',
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
      style={{ ...style, flexDirection: LabelPosMap[labelPosition] }}
    >
      {label && (
        <label htmlFor={name} className='jpk-text-input__label'>
          {label}
        </label>
      )}
      <input
        {...restProps}
        className='jpk-text-input__input'
        disabled={disabled}
        name={name}
        style={inputStyle}
        type={type}
        value={value}
      />
    </div>
  );
}
