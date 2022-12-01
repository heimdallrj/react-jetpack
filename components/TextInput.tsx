import clsx from 'clsx';
import { CSSProperties } from 'react';
import { useConfig } from '../hooks';

enum LabelPosMap {
  right = 'row',
  bottom = 'column',
  left = 'row-reverse',
  top = 'column-reverse',
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  labelPosition?: 'right' | 'bottom' | 'left' | 'top';
  name?: string;
  style?: CSSProperties;
  type?:
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
  const { prefix }: any = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-text-input`,
        disabled && `${prefix}-text-input--disabled`,
        className
      )}
      style={{ ...style, flexDirection: LabelPosMap[labelPosition] }}
    >
      {label && (
        <label htmlFor={name} className={`${prefix}-text-input__label`}>
          {label}
        </label>
      )}
      <input
        {...restProps}
        className={`${prefix}-text-input__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type={type}
        value={value}
      />
    </div>
  );
}
