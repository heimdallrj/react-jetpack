import clsx from 'clsx';
import { CSSProperties } from 'react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  action?: string;
  className?: string;
  inputStyle?: CSSProperties;
  style?: CSSProperties;
  onSearch?: (keyword: string) => void;
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
  return (
    <form
      action={action}
      className={clsx(
        'jpk-search-form',
        disabled && 'jpk-search-form--disabled',
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        className='jpk-search-form__input'
        disabled={disabled}
        name='q'
        style={inputStyle}
        type='search'
      />
      <button
        className='jpk-search-form__btn'
        type='submit'
        disabled={disabled}
      >
        <span className='jpk-search-form__icon'>Search</span>
      </button>
    </form>
  );
}
