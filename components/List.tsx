import Block, { BlockProps } from '../layout/Block';

export interface ListProps extends BlockProps {
  as?: 'ol' | 'ul';
}

export const List = ({ as = 'ul', children, ...restProps }: ListProps) => (
  <Block {...restProps} className='jpk-list' variant={as}>
    {children}
  </Block>
);

export const ListItem = ({ children, ...restProps }: BlockProps) => (
  <Block variant='li' {...restProps} className='jpk-list-item'>
    {children}
  </Block>
);

export default List;
