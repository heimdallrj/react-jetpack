import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs as Component, Tabs, Tab } from '../../../generics';

export default {
  title: 'Components/Generics/Tabs',
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
    <Tabs {...args}>
      <Tab title='Gator'>
        See ya later, <em>Alligator</em>!
      </Tab>
      <Tab title='Croc'>
        After 'while, <em>Crocodile</em>!
      </Tab>
      <Tab title='Sarcosuchus'>
        Nothing to see here, this tab is <em>extinct</em>!
      </Tab>
    </Tabs>
  );
};

export const Story = Template.bind({});
Story.args = {};
