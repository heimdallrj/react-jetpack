import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert as Component } from '../../';

export default {
  title: 'Components/Alert',
  component: Component,
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'info', 'success'],
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  return (
    <Component {...args}>
      This is an {args.severity} alert — check it out!
    </Component>
  );
};

export const Story = Template.bind({});
Story.args = {};
