import clsx from 'clsx';
import { CSSProperties } from 'react';
import styled from 'styled-components';
import JBlock from '../layout/Block';

const Block = styled(JBlock)`
  input {
    padding: 6px 10px;
  }
`;

enum LabelPosMap {
  right = 'row',
  top = 'column',
  left = 'row-reverse',
  bottom = 'column-reverse',
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
    <Block
      display='flex'
      flexDirection={LabelPosMap[labelPosition]}
      gap={5}
      className={clsx(
        'jpk-text-input',
        disabled && 'jpk-text-input--disabled',
        className
      )}
      style={style}
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
    </Block>
  );
}
