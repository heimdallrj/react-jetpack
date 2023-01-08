import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput as Component } from '../../../generics';

export default {
  title: 'Components/Generics/SearchInput',
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
