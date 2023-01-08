import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion as Component, AccordionItem } from '../../../generics';

export default {
  title: 'Components/Generics/Accordion',
  component: Component,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

// eslint-disable-next-line no-empty-pattern
const Template: ComponentStory<typeof Component> = ({}) => {
  return (
    <Component>
      <AccordionItem summary='Item 1'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionItem>
      <AccordionItem summary='Item 2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionItem>
      <AccordionItem summary='Item 3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionItem>
    </Component>
  );
};

export const Story = Template.bind({});
