import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, Text as Component } from '../../../generics';

export default {
  title: 'Components/Generics/Text',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }: any) => {
  return <Text {...args}>{children}</Text>;
};

export const Story = Template.bind({});
Story.args = {
  children:
    'Lorem ipsum dolor sit amet, Bold text consectetur adipiscing elit. Duis sit amet facilisis lectus.',
};
