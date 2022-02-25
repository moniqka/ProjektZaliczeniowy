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

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme: { color } }) => color.text.primary};
  margin: 10px 0;
  margin-right: 20px;
`;

export const InputsWraper = styled.div`
  margin-bottom: 30px;
  width: 90%;
  @media (min-width: ${breakpoint.m}) {
    display: flex;
  }
`;

export const StyledTextFiled = styled.textarea`
  width: 90%;
  min-height: 80px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  color: red;
  font-size 12px;
  margin-top: 10px;
`;