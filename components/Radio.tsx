import clsx from 'clsx';
import { CSSProperties } from 'react';

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
  return (
    <div
      className={clsx(
        'jpk-radio',
        checked && 'jpk-radio--checked',
        disabled && 'jpk-radio--disabled',
        className
      )}
      style={{ ...style, flexDirection: LabelPosMap[labelPosition] }}
    >
      <input
        {...restProps}
        checked={checked}
        className='jpk-radio__input'
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='radio'
        value={value}
      />
      {label && (
        <label className='jpk-radio__label' htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
