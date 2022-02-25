import styled from 'styled-components';

export const StyledIcon = styled.i`
  color: ${({ theme: { color }, colorType }) =>
    colorType ? color.text[colorType] : color.text.primary};
  font-size: ${({ size }) => size};
`;
