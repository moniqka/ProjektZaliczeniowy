import styled, {css} from 'styled-components';

export const ImageContainer = styled.div`
  max-width: 100px;
  min-width: 100px;
  position: relative;
  height: 95%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  ${({backgImg}) => backgImg && css`
  &::before {
    content: "";
    background-image: url(${backgImg});
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 1;
  }
  `}
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;