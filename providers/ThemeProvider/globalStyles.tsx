// @ts-nocheck
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --colors-primary: #4f53b1;
    --colors-secondary: #420039;
    --colors-accent: gray;
    --colors-tertiary: #D72638
    --colors-quaternary: #FFFFFF
    --colors-quinary: #FF570A
    --colors-bg-primary: white;
    --colors-text-primary: #000000;
    --colors-error: rgb(253, 237, 237);
    --colors-warning: rgb(255, 244, 229);
    --colors-info: rgb(229, 246, 253);
    --colors-success: rgb(237, 247, 237);
    --colors-disabled: rgba(239, 239, 239, 0.3);
    --colors-a-hover: #ccc;
    --fonts-primary: 'Montserrat', sans-serif;
    --fonts-size-primary: 14px;
  }
  html {}
  a { 
    text-decoration: none;
  }
  aside {}
  article {}
  b {}
  body {
    font-family: var(--fonts-primary);
    font-size: var(--fonts-size-primary);
    background-color: var(--colors-bg-primary);
    color: var(--colors-text-primary);
  }
  button {}
  button:disabled,
  button[disabled] {
    color: var(--colors-disabled);
    cursor: default;
  }
  code {}
  del {}
  div {}
  details {}
  em {}
  figcaption {}
  figure {}
  footer {}
  h1, h2, h3, h4, h5, h6 {}
  header {}
  i {}
  input {}
  input[type='checkbox'] {}
  input:disabled,
  input[disabled] {
    color: var(--colors-disabled);
    cursor: default;
  }
  ins {}
  main {}
  mark {}
  nav {}
  ol {}
  ol li {}
  option {}
  p {}
  pre {}
  select {}
  section {}
  small {}
  span {}
  strong {}
  sub {}
  summary {}
  sup {}
  table {}
  time {}
  ul {}
  ul li {}

  /* Custom: Accordion */
  .jpk-accordion {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .jpk-accordion__section {}
    .jpk-accordion__summary {
      background: var(--colors-primary);
      box-shadow: 0px 1px 1px -1px var(--colors-primary), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      color: white;
    }
    .jpk-accordion__content {
      padding: 10px;
    }
  }

  /* Custom: Button */
  .jpk-btn {
    appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: 0.875rem;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0.02857em;
    line-height: 1.75;
    min-width: 64px;
    outline: 0px;
    position: relative;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    vertical-align: middle; 
    border-radius: 4px;

    &__contained {
      background-color: var(--colors-primary);
      border: 0px;
      box-shadow: var(--colors-primary) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
      color: rgb(255, 255, 255);

      &--small {
        padding: 4px 10px;
      }
      &--medium {
        padding: 6px 16px;
      }
      &--large {
        padding: 8px 22px;
      }

      &:disabled,
      &[disabled] {
        background-color: rgba(0, 0, 0, 0.12);
        box-shadow: none;
        color: var(--colors-disabled);
      }
    }
    &__outlined {
      background-color: transparent;
      border: 1px solid rgba(25, 118, 210, 0.5);
      box-shadow: none;
      color: var(--colors-primary);

      &--small {
        padding: 3px 9px;
      }
      &--medium {
        padding: 5px 15px;
      }
      &--large {
        padding: 7px 21px;
      }

      &:disabled,
      &[disabled] {
        border: 1px solid var(--colors-disabled);
        color: var(--colors-disabled);
      }
    }
    &__text {
      background-color: transparent;
      border: 0px;
      border-radius: 4px;
      color: var(--colors-primary);

      &--small {
        padding: 4px 5px;
      }
      &--medium {
        padding: 6px 8px;
      }
      &--large {
        padding: 8px 11px;
      }

      &:disabled,
      &[disabled] {
        color: var(--colors-disabled);
      }

      &:hover {
        background-color: rgba(25, 118, 210, 0.04);
        text-decoration: none;
      }
    }
  }

  /* Custom: Checkbox */
  .jpk-checkbox {
    display: flex;
    align-items: center;
    gap: 5px;

    &--checked {}
    &--disabled {
      color: #d1d1d1;
    }

    &__input {}
    &__label {}
  }

  /* Custom: TextInput */
  .jpk-text-input {
    &__input {}
    &__label {}
    &--disabled {}
  }

  /* Custom: SearchInput */
  .jpk-search-input {
    display: flex;
    border: 1px solid;

    &__input {
      flex: 1;
      border: 0;
      padding: 0 10px;
    }
    &__icon {
      cursor: pointer;
      width: 32px;
    }
  }

  /* Custom: Search Form */
  .jpk-search-form {
    display: flex;

    &--disabled {}

    &__input {}

    &__btn {}

    &__icon {}
  }

  /* Custom: Select */
  .jpk-select {

    &--disabled {}

    &__label {}

    &__menu {}

    &__menu-item {}
  }

  /* Custom: Table */
  .jpk-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    thead tr {
      background-color: var(--colors-primary);
      color: #ffffff;
      text-align: left;
    }
    th, td { padding: 12px 15px; }
    tbody {
      tr {
        border-bottom: 1px solid #dddddd;
      }
      tr:nth-of-type(even) {
        background-color: #f3f3f3;
      }
      tr:last-of-type {
        border-bottom: 2px solid var(--colors-primary);
      }
      tr.active-row {
        font-weight: bold;
        color: var(--colors-primary);
      }
    } 
  }

  /* Custom: Radio */
  .jpk-radio {
    display: flex;
    align-items: center;
    gap: 5px;

    &--checked {}
    &--disabled {
      color: #d1d1d1;
    }

    &__input {}
    &__label {}
  }

  /* Custom: Tabs */
  .jpk-tabs {
    .jpk-tab {
      border-bottom: 1px solid #ccc;
      padding-left: 0;

      &__button {
        cursor: pointer;
        display: inline-block;
        list-style: none;
        margin-bottom: -1px;
        padding: 0.5rem 0.75rem;
      }

      &--active {
        background-color: white;
        border: solid #ccc;
        border-width: 1px 1px 0 1px;
      }
    }
  }
`;
