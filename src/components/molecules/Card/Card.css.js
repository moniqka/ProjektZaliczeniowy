import styled from 'styled-components';
import { breakpoint } from 'styles/theme';

export const Info = styled.div`
  margin-left: 20px;
  text-align: left;
`;

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  height: 100px;
  margin: 5px;
  background: rgba(255,255,255,0.7);
  cursor: pointer;
  @media (min-width: ${breakpoint.xl}) {
    margin: 20px;
  }

`;