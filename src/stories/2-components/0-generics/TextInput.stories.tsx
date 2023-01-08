import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInput as Component } from '../../../generics';

export default {
  title: 'Components/Generics/TextInput',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  return <TextInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
