import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from 'components/atoms/Button/Button';
import { breakpoint } from 'styles/theme';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 400px;
  width: 90%;
  gap: 15px;
  background-color: white;
  margin: 0 auto;
  padding: 15px;
  max-height: 80vh;
  outline: none;
  overflow: auto;
  @media (min-width: ${breakpoint.xl}) {
    width: 60%;
  }
  & > div {
    margin-bottom: 20px;
    @media (min-width: ${breakpoint.xl}) {
      margin-bottom: 50px;
    }
  }
`;

export const StyledButton = styled(Button)`
  max-width: 150px;
  min-width: 80px;
  min-height: 40px;
  margin: 0 auto;
  margin-right: 10px;
// position: sticky;
// bottom: 10px;
// left: 50%;
// transform: translateX(-50%);
`;
