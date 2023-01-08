// @ts-nocheck
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --colors-primary: ${($) => $['--colors-primary']};
    --colors-secondary: ${($) => $['--colors-secondary']};
    --colors-tertiary: ${($) => $['--colors-tertiary']};
    --colors-accent: ${($) => $['--colors-accent']};
    --colors-error: ${($) => $['--colors-error']};
    --colors-warning: ${($) => $['--colors-warning']};
    --colors-info: ${($) => $['--colors-info']};
    --colors-success: ${($) => $['--colors-success']};
    --colors-bg-primary: ${($) => $['--colors-bg-primary']};
    --colors-bg-secondary: ${($) => $['--colors-bg-secondary']};
    --colors-text-primary:${($) => $['--colors-text-primary']};
    --colors-text-secondary: ${($) => $['--colors-text-secondary']};
    --colors-disabled: ${($) => $['--colors-disabled']};
    --colors-a: ${($) => $['--colors-a']};
    --colors-a-hover: ${($) => $['--colors-a-hover']};
    --fonts-primary: ${($) => $['--fonts-primary']};
    --fonts-secondary: ${($) => $['--fonts-secondary']};
    --fonts-size-primary: ${($) => $['--fonts-size-primary']};
  }
  /* normalize browser defaults with normalize.css */
  button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}details,main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

  html {}
  a {
    color: var(--colors-a);
    text-decoration: none;
    &:hover {
      color: var(--colors-a-hover);
    }
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
        color: var(--colors-accent);
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
        color: var(--colors-accent);
      }
    }
    &__text {
      background-color: transparent;
      border: 0px;
      color: var(--colors-primary);

      &:disabled,
      &[disabled] {
        color: var(--colors-accent);
      }
    }

    &__small {
      padding: 4px 5px;
    }
    &__medium {
      padding: 6px 8px;
    }
    &__large {
      padding: 8px 11px;
    }
  }

  /** JCheckbox */
  .jpk-checkbox {
    align-items: center;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    gap: 5px;

    &--checked {}
    &--disabled {}

    &__input {
      accent-color: var(--colors-primary);
    }
    &__label {}
  }

  /** JFileInput */
  .jpk-file-input {}

  /** JList */
  .jpk-list {
    &__item {}
  }

  /** JPagiantion **/
  .jpk-pagination {
    align-items: center;
    display: flex;
    gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;

    &__nav {
      border: none;
      background-color: transparent;

      &__first {}
      &__prev {}
      &__next {}
      &__last {}
    }
  
    &__item {

      &--current {
        background-color: #cccccc;
      }
    }
  
  }

  /** JRadio */
  .jpk-radio {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px;

    &--checked {}
    &--disabled {}

    &__input {
      accent-color: var(--colors-primary);
    }
    &__label {}
  }

  /** JRangeInput {} */
  .jpk-range-input {
    accent-color: var(--colors-primary);
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px;

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
`;
