import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List as Component, ListItem } from '../../../generics';

export default {
  title: 'Components/Generics/List',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  return (
    <Component {...args}>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
    </Component>
  );
};

export const Story = Template.bind({});
Story.args = {};
