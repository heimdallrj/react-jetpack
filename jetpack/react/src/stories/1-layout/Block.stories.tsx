import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block as Component } from '../../';

// @todo: show all the variants

export default {
  title: 'Layout/Block',
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus at
      mauris a hendrerit. Sed eu metus quis mauris pulvinar sagittis. Duis ac
      est quam. Nam quis pulvinar nisi. Cras maximus dui vitae rutrum feugiat.
      Nullam ac nisi sem. Maecenas consectetur consequat purus id aliquam. Nulla
      facilisi. Nam rhoncus mauris vitae erat dictum, sed sollicitudin sem
      laoreet. Sed ac vulputate enim, sit amet dignissim eros. Nulla non
      malesuada mauris. Duis ullamcorper consequat ultrices. Fusce ipsum est,
      condimentum et dolor eu, finibus suscipit ante.
    </Component>
  );
};

export const Story = Template.bind({});
Story.args = {};
