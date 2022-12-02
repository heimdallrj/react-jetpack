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
  return (
    <Block
      $flexDirection={LabelPosMap[labelPosition]}
      className={clsx(
        'jpk-checkbox',
        checked && 'jpk-checkbox--checked',
        disabled && 'jpk-checkbox--disabled',
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        checked={checked}
        className='jpk-checkbox__input'
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='checkbox'
        value={value}
      />
      {label && (
        <label className='jpk-checkbox__label' htmlFor={name}>
          {label}
        </label>
      )}
    </Block>
  );
}
