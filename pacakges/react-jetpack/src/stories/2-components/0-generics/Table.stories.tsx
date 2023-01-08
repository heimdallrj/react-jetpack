import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import {
  Table as Component,
  Table,
  TableHeader,
  TableRow,
  TableColHead,
  TableBody,
  TableCell,
} from '../../../generics';

export default {
  title: 'Components/Generics/Table',
  component: Component,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args: any) => {
  return (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableColHead>Name</TableColHead>
          <TableColHead>Type</TableColHead>
          <TableColHead>Default</TableColHead>
          <TableColHead>Description</TableColHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <code>children</code>
          </TableCell>
          <TableCell>
            <code>node</code>
          </TableCell>
          <TableCell>n/a</TableCell>
          <TableCell>The content of the component.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>variant</code>
          </TableCell>
          <TableCell>
            <code>
              'b' | 'del' | 'div' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' |
              'h6' | 'i' | 'ins' | 'mark' | 'p' | 'span' | 'sub' | 'sup' |
              'small' | 'strong'
            </code>
          </TableCell>
          <TableCell>
            <code>p</code>
          </TableCell>
          <TableCell>The element type</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Story = Template.bind({});
Story.args = {};
