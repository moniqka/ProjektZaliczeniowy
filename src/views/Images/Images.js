import React from 'react';
import { HeaderTitle } from 'components/atoms/HeaderTitle';
import { useTranslation } from 'react-i18next';

export const Images = () => {
  const { t } = useTranslation();

  return (
    <HeaderTitle>{t('comingSoonImages')}</HeaderTitle>
  )
}
