import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, StyledButton } from './Modal.css';
import { useTranslation } from 'react-i18next';

ModalWrapper.setAppElement('#root');

export const Modal = ({ handleClose, onSubmit, isOpen, children, isSubmit }) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
      <div>{children}</div>
      <div style={{display: 'flex'}}>
        <StyledButton onClick={handleClose}>{t('close')}</StyledButton>
        {isSubmit && <StyledButton onClick={onSubmit}>{t('send')}</StyledButton>}
      </div>
  </ModalWrapper>
  )
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

Modal.defaultProps = {
  handleClose: () => {},
  isOpen: false,
  children: null,
};
