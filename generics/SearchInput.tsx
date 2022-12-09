import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { omit } from '../utils/mixins';

interface Style extends CSSProperties {
  input?: CSSProperties;
  button?: CSSProperties;
}

// @todo: make more compatible with html semantic elements

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  action?: string;
  className?: string;
  name?: string;
  style?: Style;
  onSubmit?: () => void;
}

export function SearchInput({
  action,
  className,
  disabled = false,
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
      style={omit(style, 'input', 'button')}
    >
      <input
        {...restProps}
        autoComplete='off'
        className='jpk-search-input__input'
        disabled={disabled}
        name={name}
        style={style?.input}
        type='search'
      />
      <button
        className='jpk-search-input__btn'
        type='submit'
        disabled={disabled}
        style={style?.button}
        onClick={onSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
