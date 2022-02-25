import styled, { css } from 'styled-components';
import { Icon } from 'components/atoms/Icon/Icon';
import { breakpoint } from 'styles/theme';

export const StyledItem = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 85%!important;
  height: 150px;
  margin: 3px 0;
  display: flex!important;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  text-align: center;
  text-overflow: ellipsis;
  cursor: pointer;
  /* overflow-wrap: anywhere; */
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
    `}
`;
export const StyledIcon = styled(Icon)`
opacity: .7;
color: #2c2c2c;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`;

export const StyledContainer = styled.div`
  max-width: 40vw;
  width: 100%;
  position: absolute;
  bottom: 20%;
  right: 50%;
  transform: translate(50%, 0px);
  @media (max-width: ${breakpoint.l}) {
    max-width: 70vw;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  width: calc(100%);
  padding-top: 10px;
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
/* display:inline-block;
text-overflow:ellipsis; */
`;