import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: flex;
  gap: 5px;
  text-transform: capitalize;
  font-size: small;
`;

const ListItem = styled.li``;

export default function Breadcrumbs({
  homeLabel = 'Home',
  last = null,
  separator = '::',
  data = [],
}: any) {
  return (
    <List>
      <ListItem>
        <Link to='/'>{homeLabel}</Link>
      </ListItem>
      {data.map(({ label, path }: any) => (
        <>
          <ListItem>{separator}</ListItem>
          <ListItem>
            <Link to={path}>{label}</Link>
          </ListItem>
        </>
      ))}
      {last && (
        <>
          <ListItem>{separator}</ListItem>
          <ListItem>{last.label}</ListItem>
        </>
      )}
    </List>
  );
}
