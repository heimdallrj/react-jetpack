import clsx from 'clsx';
import { CSSProperties } from 'react';
import { useConfig } from '../hooks';

enum LabelPosMap {
  right = 'row',
  bottom = 'column',
  left = 'row-reverse',
  top = 'column-reverse',
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
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

export default function Radio({
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
}: Props) {
  const { prefix }: any = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-radio`,
        checked && `${prefix}-radio--checked`,
        disabled && `${prefix}-radio--disabled`,
        className
      )}
      style={{ ...style, flexDirection: LabelPosMap[labelPosition] }}
    >
      <input
        {...restProps}
        checked={checked}
        className={`${prefix}-radio__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='radio'
        value={value}
      />
      {label && (
        <label className={`${prefix}-radio__label`} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
