import styled from 'styled-components';
import { breakpoint } from 'styles/theme';

export const HeaderTitle = styled.h1`
  color: ${({ theme: { color } }) => color.text.primary};
  font-family: ${({ theme: { font } }) => font.funny};
  margin-bottom: 2%;
  @media (min-width: ${breakpoint.xl}) {
    margin-bottom: 5%;
  }
`;