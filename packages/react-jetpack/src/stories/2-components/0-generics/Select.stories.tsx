import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select as Component } from '../../../generics';

export default {
  title: 'Components/Generics/Select',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  return <Component {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  label: 'Number',
  value: '3',
  options: [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
  ],
};
