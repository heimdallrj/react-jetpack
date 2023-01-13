import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as Component } from '../../';

export default {
  title: 'Components/Button',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({
  children,
  ...args
}: any) => {
  return <Component {...args}>{children}</Component>;
};

export const Story = Template.bind({});
Story.args = {
  children: 'Hello',
};
