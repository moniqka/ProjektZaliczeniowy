import styled from 'styled-components';
import { breakpoint } from 'styles/theme';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 50px;
  overflow: hidden;
  justify-content: center;
  @media (min-width: ${breakpoint.xl}) {
    padding-top: 60px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  @media (mmax-width: ${breakpoint.l}) and (orientation: landscape) {
    width: 100%;
    height: unset;
  }
  @media (max-width: ${breakpoint.xl}) and (orientation: portrait) {
    width: unset;
    height: 100%;
  }
`;

export const StyledWelcomeTitle = styled.h1`
  position: absolute;
  text-align: center;
  line-height: 1.2;
  right: 50%;
  top: 10%;
  transform: translate(50%, 0);
  font-family: ${({ theme: { font } }) => font.funny};
  font-size: 30px;
  color: ${({ theme: { color } }) => color.text.primary};
  @media (max-width: ${breakpoint.s}) and (orientation: portrait) {
    top: 10%;
  }
  @media (min-width: ${breakpoint.m}) and (orientation: landscape) {
    top: 20%;
    right: 80%;
    transform: translate(50%, 100%);
  }
  @media (min-width: ${breakpoint.xl}) {
    top: 20%;
    right: 80%;
    font-size: 60px;
    transform: translate(50%, 100%);
  }
`;