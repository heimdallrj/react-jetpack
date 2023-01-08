import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination as Component } from '../../../generics';

export default {
  title: 'Components/Generics/Pagination',
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
  total: 10,
  current: 2,
  pageSize: 2,
  labels: {
    first: 'First',
    prev: 'Prev',
    next: 'Next',
    last: 'Last',
  },
};
