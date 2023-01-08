import styled from 'styled-components';
import * as $ from '../generics';

export type { ButtonProps } from '../generics';

export const Button = styled($.Button)`
  .jpk-btn {
    &__small {
      min-width: 64px;
      height: 30px;
      padding: 4px 5px;
    }
    &__medium {
      min-width: 89px;
      height: 36px;
      padding: 6px 8px;
    }
    &__large {
      min-width: 92px;
      height: 42px;
      padding: 8px 11px;
    }
  }
`;

export default Button;
