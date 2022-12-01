import clsx from 'clsx';
import { CSSProperties } from 'react';
import { useConfig } from '../hooks';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  action?: string;
  className?: string;
  inputStyle?: CSSProperties;
  style?: CSSProperties;
  onSearch: (keyword: string) => void;
}

export default function SearchInput({
  action = '/search',
  className,
  disabled = false,
  inputStyle,
  style = {},
  onSearch,
  ...restProps
}: SearchInputProps) {
  const { prefix }: any = useConfig();
  return (
    <form
      action={action}
      className={clsx(
        `${prefix}-search-form`,
        disabled && `${prefix}-search-form--disabled`,
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        className={`${prefix}-search-form__input`}
        disabled={disabled}
        name='q'
        style={inputStyle}
        type='search'
      />
      <button type='submit' disabled={disabled}>
        <span className={`${prefix}-search-form__icon`}>Search</span>
      </button>
    </form>
  );
}
