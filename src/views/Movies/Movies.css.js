import styled, { css } from 'styled-components';
import { breakpoint } from 'styles/theme';

export const Container = styled.div`
  padding: 2% 5%;
  padding-top: calc(50px + 20%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoint.xl}) {
    padding: 2% 5%;
    padding-top: 2%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const VideoWrapper = styled.div`
  display: none;
  max-width: 20vw;
  background: white;
  padding: 2%;
  @media (min-width: ${breakpoint.l}) {
    display: block;
  }
  // border-radius: 15px;
`

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 2%;
  position: relative;
`

export const StyledButton = styled.button`
  position: absolute;
  width: 100px;
  padding: 5px;
  top: 40px;
  right: 50%;
  transform: translate(50%, 0);
  border: none;
  background-color: ${({ theme: { color } }) => color.button.default};
  border-radius: 5px;
  color: white;
  ${({disabled}) => disabled && css`
    cursor: default;
    background-color: ${({ theme: { color } }) => color.button.disabled};
    color:  ${({ theme: { color } }) => color.secondary};
  `}
`;

export const MoviesContainer = styled.div`
width: 100%;
padding: 20px;
padding-top: 20px;
overflow-y: auto;
max-height: 600px;
justify-content: center;
flex-wrap: wrap;
margin-top: 30px;
display: flex;
`