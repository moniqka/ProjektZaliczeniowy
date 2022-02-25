import React from 'react';
import { FormModal } from 'components/organisms/FormModal/FormModal';
import { AboutModal } from 'components/organisms/AboutModal/AboutModal';
import { LicenceModal } from 'components/organisms/LicenceModal/LicenceModal';

const MODAL_COMPONENTS = {
  FORM_MODAL: FormModal,
  ABOUT_MODAL: AboutModal,
  LICENCE_MODAL: LicenceModal
}

const RootModal = ({ modalType, modalProps }) => {
  const SpecificModal = MODAL_COMPONENTS[modalType];
  if (!modalType) return null;
  return <SpecificModal {...modalProps} />
};

export default RootModal;