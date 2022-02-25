import React from 'react';
import { HeaderTitle } from 'components/atoms/HeaderTitle';
import { useTranslation } from 'react-i18next';

export const Cats = () => {
  const { t } = useTranslation();

  return (
    <HeaderTitle>{t('comingSoonCats')}</HeaderTitle>
  )
}