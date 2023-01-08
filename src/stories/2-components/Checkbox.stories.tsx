import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox as Component } from '../../';

export default {
  title: 'Components/Checkbox',
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
Story.args = {};
