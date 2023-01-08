import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Col as Component } from '../../';

export default {
  title: 'Layout/Col',
  component: Component,
  argTypes: {
    gap: {
      control: { type: 'range' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  const Cell = ({ children }: any) => (
    <div
      style={{
        backgroundColor: '#ccc',
        height: '50px',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );

  return (
    <Component {...args}>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Component>
  );
};

export const Story = Template.bind({});
Story.args = {};
