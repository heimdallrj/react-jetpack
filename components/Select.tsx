import clsx from 'clsx';
import { CSSProperties } from 'react';
import { useConfig } from '../hooks';

enum LabelPosMap {
  right = 'row',
  bottom = 'column',
  left = 'row-reverse',
  top = 'column-reverse',
}

type Option = { label: string; value: string };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  labelPosition?: 'right' | 'bottom' | 'left' | 'top';
  inputStyle?: CSSProperties;
  options: Option[];
  style?: CSSProperties;
}

export default function Select({
  className,
  disabled,
  label,
  labelPosition = 'right',
  name,
  inputStyle,
  options = [],
  style,
  value,
  ...restProps
}: SelectProps) {
  const { prefix }: any = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-select`,
        disabled && `${prefix}-select--disabled`,
        className
      )}
      style={{
        ...style,
        display: 'flex',
        flexDirection: LabelPosMap[labelPosition],
      }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={`${prefix}-select`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        value={value}
        {...restProps}
      >
        {options.map((opt: Option) => (
          <option
            className={`${prefix}-option`}
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
