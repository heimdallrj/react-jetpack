import clsx from 'clsx';
import { CSSProperties } from 'react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  action?: string;
  className?: string;
  inputStyle?: CSSProperties;
  name?: string;
  style?: CSSProperties;
  onSubmit?: () => void;
}

export default function SearchInput({
  action,
  className,
  disabled = false,
  inputStyle,
  name = 'q',
  style,
  onSubmit,
  ...restProps
}: SearchInputProps) {
  return (
    <form
      action={action}
      className={clsx(
        'jpk-search-input',
        disabled && 'jpk-search-input--disabled',
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        autoComplete='off'
        className='jpk-search-input__input'
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='search'
      />
      <button
        className='jpk-search-input__btn'
        type='submit'
        disabled={disabled}
        onClick={onSubmit}
      >
        Search
      </button>
    </form>
  );
}
