import React from 'react';
import { HeaderTitle } from 'components/atoms/HeaderTitle';
import { useTranslation } from 'react-i18next';

export const Travel = () => {
  const { t } = useTranslation();

  return (
    <HeaderTitle>{t('comingSoonTravel')}</HeaderTitle>
  )
}
