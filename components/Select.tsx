import clsx from 'clsx';
import { CSSProperties } from 'react';
import styled from 'styled-components';

type BlockProps = {
  $flexDirection: string;
};
export const Block = styled.div<BlockProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: center;
`;

enum LabelPosMap {
  right = 'row',
  bottom = 'column-reverse',
  left = 'row-reverse',
  top = 'column',
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
  return (
    <Block
      className={clsx(
        'jpk-select',
        disabled && 'jpk-select--disabled',
        className
      )}
      $flexDirection={LabelPosMap[labelPosition]}
      style={style}
    >
      {label && (
        <label className='jpk-select__label' htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className='jpk-select__menu'
        disabled={disabled}
        name={name}
        style={inputStyle}
        value={value}
        {...restProps}
      >
        {options.map((opt: Option) => (
          <option
            className='jpk-select__menu-item'
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </Block>
  );
}
