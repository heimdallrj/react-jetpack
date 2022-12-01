import clsx from 'clsx';
import { CSSProperties } from 'react';
import { useConfig } from '../hooks';

enum LabelPosMap {
  right = 'row',
  bottom = 'column',
  left = 'row-reverse',
  top = 'column-reverse',
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  labelPosition?: 'right' | 'bottom' | 'left' | 'top';
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
  labelPosition = 'right',
  name,
  style = {},
  value,
  ...restProps
}: CheckboxProps) {
  const { prefix }: any = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-checkbox`,
        checked && `${prefix}-checkbox--checked`,
        disabled && `${prefix}-checkbox--disabled`,
        className
      )}
      style={{ ...style, flexDirection: LabelPosMap[labelPosition] }}
    >
      <input
        {...restProps}
        checked={checked}
        className={`${prefix}-checkbox__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='checkbox'
        value={value}
      />
      {label && (
        <label className={`${prefix}-checkbox__label`} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
