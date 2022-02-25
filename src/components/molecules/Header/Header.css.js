import styled, { css } from 'styled-components';
import { Icon } from 'components/atoms/Icon/Icon';
import { breakpoint } from 'styles/theme';

export const StyledHeader = styled.header`
  background-color: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.text.primary};
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  @media (min-width: ${breakpoint.xl}) {
    height: 60px;
  }
`;

export const BackgroundOverlay = styled.div`
  background-color: black;
  position: absolute;
  z-index: 2;
  opacity: 0;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

export const StyledIcon = styled(Icon)`
  height: 30px;
  cursor: pointer;
  color: ${({ theme: { color } }) => color.tertiary};
  ${({ isOpen }) =>
    isOpen &&
    css`
      color: ${({ theme: { color } }) => color.headerContentOpen};
    `}
`;
