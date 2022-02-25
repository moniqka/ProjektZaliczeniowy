import styled from 'styled-components';
import { Icon } from 'components/atoms/Icon/Icon';

export const SearchInputContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px grey;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 3px;
  right: 0;
  cursor: pointer;
`;
