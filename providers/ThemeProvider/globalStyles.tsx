// @ts-nocheck
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --colors-primary: #4f53b1;
    --colors-secondary: #420039;
    --colors-accent: #cccccc;
    --colors-tertiary: #D72638
    --colors-quaternary: #FFFFFF
    --colors-quinary: #FF570A
    --colors-bg-primary: white;
    --colors-text-primary: #000000;
    --colors-error: rgb(253, 237, 237);
    --colors-warning: rgb(255, 244, 229);
    --colors-info: rgb(229, 246, 253);
    --colors-success: rgb(237, 247, 237);
    --colors-disabled: rgba(0, 0, 0, 0.12);
    --colors-disabled-text: rgba(0, 0, 0, 0.26);
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
  button {
    cursor: pointer;
  }
  button:disabled,
  button[disabled] {
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

  /** JAccordion, JAccordionItem */
  .jpk-accordion {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &__section {}
    &__summary {
      align-items: center;
      background-color: var(--colors-accent);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    &__content {
      padding: 10px;
    }
  }

  /** JAlert */
  .jpk-alert {
    border-radius: 4px;
    color: rgb(95, 33, 32);
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding: 10px 15px;

    &--error {
      background-color: var(--colors-error);
    }
    &--warning {
      background-color: var(--colors-warning);
    }
    &--info {
      background-color: var(--colors-info);
    }
    &--success {
      background-color: var(--colors-success);
    }
  }

  /** JButton */
  .jpk-btn {
    cursor: pointer;

    &__contained {
      background-color: var(--colors-primary);
      border: 0px;
      box-shadow: var(--colors-primary) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
      color: rgb(255, 255, 255);

      &:disabled,
      &[disabled] {
        background-color: var(--colors-disabled);
        box-shadow: var(--colors-disabled) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        color: var(--colors-disabled-text);
      }
    }
    &__outlined {
      background-color: transparent;
      border: 1px solid rgba(25, 118, 210, 0.5);
      box-shadow: none;
      color: var(--colors-primary);

      &:disabled,
      &[disabled] {
        border: 1px solid var(--colors-disabled);
        color: var(--colors-disabled-text);
      }
    }
    &__text {
      background-color: transparent;
      border: 0px;
      color: var(--colors-primary);

      &:disabled,
      &[disabled] {
        color: var(--colors-disabled-text);
      }
    }

    &--small {
      padding: 4px 5px;
    }
    &--medium {
      padding: 6px 8px;
    }
    &--large {
      padding: 8px 11px;
    }
  }

  /** JCheckbox */
  .jpk-checkbox {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px

    &--checked {}
    &--disabled {}

    &__input {}
    &__label {}
  }

  /** JFileInput */
  .jpk-file-input {}

  /** JList */
  .jpk-list {
    &__item {}
  }

  /** JRadio */
  .jpk-radio {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px

    &--checked {}
    &--disabled {}

    &__input {}
    &__label {}
  }

  /** JRangeInput {} */
  .jpk-range-input {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px

    &--disabled
  }

  /** JSearchInput */
  .jpk-search-input {
    &--disabled {}

    &__input {}
    &__btn {}
  }

  /** JSelect */
  .jpk-select {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px;

    &--disabled {}

    &__label {}
    &__menu {
      &__item {}
    }
  }

  /** JTable, JTableHeader, JTableRow, JTableColHead, JTableBody, JTableCell, JTableFooter */
  .jpk-table {
    &__header {}
    &__row {}
    &__col-head {}
    &__body {}
    &__cell {}
    &__footer {}
  }

  /** JTabs */
  .jpk-tabs {
    .jpk-tab {
      &__header {
        border-bottom: 1px solid #ccc;
        padding-left: 0;
      }

      &__summary {
        cursor: pointer;
          display: inline-block;
          list-style: none;
          margin-bottom: -1px;
          padding: 0.5rem 0.75rem;
      }

      &__content {}

      &--active {
        background-color: white;
          border: solid #ccc;
          border-width: 1px 1px 0 1px;
      }
    }
  }

  /** JText (JTypography) */
  .jpk-typography {
    &__b {}
    &__big {}
    &__del {}
    &__div {}
    &__em {}
    &__h1 {}
    &__h2 {}
    &__h3 {}
    &__h4 {}
    &__h5 {}
    &__h6 {}
    &__i {}
    &__ins {}
    &__mark {}
    &__p {}
    &__span {}
    &__sub {}
    &__sup {}
    &__small {}
    &__strong {}
    &__u {}
  }

  /** JTextInput */
  .jpk-text-input {
    display: flex;
    align-items: center;
    gap: 5px;

    &--disabled {}
    
    &__label {}
    &__input {}
  }

  /* Custom: TextInput */
  .jpks-text-input {
    &__input {}
    &__label {}
    &--disabled {}
  }
`;
