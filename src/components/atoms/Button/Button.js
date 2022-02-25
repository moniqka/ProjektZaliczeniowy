import styled from 'styled-components';
import { breakpoint } from 'styles/theme';

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  background-color: ${({ theme: { color }, type }) => (type ? color[type] : color.tertiary)};
  outline: none;
  border: none;
  color: ${({ theme: { color } }) => color.text.tertiary};
  text-transform: uppercase;
  height: 50px;
  @media (min-width: ${({ theme }) => theme.breakpoint.l}) {
    height: 60px;
  }
  @media (min-width: ${breakpoint.xs}) and (orientation: landscape) {
    height: 42px;
  }
`;
