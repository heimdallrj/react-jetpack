import clsx from 'clsx';
import { CSSProperties } from 'react';
import styled from 'styled-components';

import Block from '../layout/Block';
import SearchIcon from '../icons/Search';

const Form = styled.form`
  width: 100%;
  min-height: 35px;

  section {
    flex: 1;
  }

  svg {
    padding: 0 5px;
  }

  button {
    cursor: pointer;
    width: 80px;
  }

  input {
    flex: 1;
    padding: 0 10px;
  }
`;

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
    <Form
      action={action}
      className={clsx(
        'jpk-search-form',
        disabled && 'jpk-search-form--disabled',
        className
      )}
      style={style}
    >
      <Block variant='section' display='flex' flex={1}>
        <SearchIcon width='24px' />
        <input
          {...restProps}
          autoComplete='off'
          className='jpk-search-form__input'
          disabled={disabled}
          name='q'
          style={inputStyle}
          type='search'
        />
      </Block>
      <button
        className='jpk-search-form__btn'
        type='submit'
        disabled={disabled}
      >
        <span className='jpk-search-form__icon'>Search</span>
      </button>
    </Form>
  );
}
