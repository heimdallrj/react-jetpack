import React from 'react';
import Block, { BlockProps } from './Block';

interface Props extends BlockProps {}

export default function Row({ children, ...restProps }: Props) {
  return (
    <Block {...restProps} display='flex' flexDirection='row'>
      {children}
    </Block>
  );
}
