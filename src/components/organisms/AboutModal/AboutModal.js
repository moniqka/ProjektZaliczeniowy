import React from 'react';
import { Modal } from '../Modal/Modal';
import { closeModal } from 'redux/reducers/ModalReducers';
import { useDispatch, useSelector } from 'react-redux';

export const AboutModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(({ ModalReducers }) => ModalReducers);

  const handleCloseModal = () => {
    dispatch(closeModal())
  };
  
  return (
    <Modal isOpen={modalState.modalType !== undefined} handleClose={handleCloseModal}><div>ABOUT MODAL</div></Modal>
  )
};