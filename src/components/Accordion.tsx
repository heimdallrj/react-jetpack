import styled from 'styled-components';
import * as $ from '../generics';

export type { AccordionProps, AccordionItemProps } from '../generics';

export const Accordion = styled($.Accordion)`
  .jpk-accordion {
    &__summary {
      background-color: var(--colors-primary);
      color: #ffffff;
    }
  }
`;

export const AccordionItem = styled($.AccordionItem)`
  line-height: 20px;
`;

export default Accordion;
