import styled, { css } from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Icon } from 'components/atoms/Icon/Icon';

export const StyledMenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  width: 55vw;
  z-index: 3;
  height: auto;
  min-height: 230px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 5px 10px -4px rgb(0 0 0 / 25%);
  border-radius: 20px;
  @media only screen and (orientation: landscape) { 
    width: 40vw;
  }
`;

export const CloseBackground = styled.div`
  background-color: white;
  color: ${({ theme: { color } }) => color.text.primary};
  width: 60px;
  height: 50px;
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledButton = styled(Button)`
  background-color: white;
  color: ${({ theme: { color } }) => color.text.primary};
  border-top: solid 1px lightgray;
  text-transform: uppercase;
  ${({bottom}) => bottom && css`
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  `}
`;

export const UserInfoSection = styled.div`
  margin: 10px;
  padding: 10px;
  width: 90%;
  background-color: ${({ theme: { color } }) => color.background.main};
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: left;
`;

export const StyledIcon = styled(Icon)`
  margin: 0 7px;
  scroll-snap-align: center;
  width: 50px;
  height: 50px;
  clip-path: circle(50%);
`;

export const LanguageSwipe = styled.ul`
  height: 60px;
  flex-wrap: nowrap;
  display: flex;
  list-style-type: none;
`;

export const LanguageWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

`;

export const SwipeElement = styled.li`
  cursor: pointer;
  opacity: 20%;
  ${({ isActive }) => isActive && { opacity: '100%' }}
`;