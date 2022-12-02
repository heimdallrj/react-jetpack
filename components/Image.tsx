import styled from 'styled-components';

const Image = styled.img.attrs(({ alt, src }) => ({ alt: alt || src }))``;

export default Image;
