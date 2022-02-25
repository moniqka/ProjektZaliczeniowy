import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  StyledMenuContainer,
  CloseBackground,
  StyledButton,
  StyledIcon,
  SwipeElement,
  LanguageSwipe,
  LanguageWrapper,
} from './SettingsMenu.css';
import { openModal } from 'redux/reducers/ModalReducers';

import flagPl from 'assets/flag-pl.svg';
import flagEn from 'assets/flag-en.svg';
import flagDe from 'assets/flag-de.svg';


const languages = [
  { lang: 'de', icon: flagDe },
  { lang: 'en', icon: flagEn },
  { lang: 'pl', icon: flagPl },
];

export const SettingsMenu = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [currentLang, setCurrentLang] = useState('pl');

  const handleClick = (_, lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  const handleOpenModal = (modal) => {
    dispatch(openModal({modalType: modal}));
  };

  return (
    <>
      <CloseBackground />
      <StyledMenuContainer>
        <LanguageWrapper>
          <LanguageSwipe>
            {languages
              .map(({ lang, icon }) => (
                <SwipeElement
                  isActive={currentLang === lang}
                  key={lang}
                  onClick={(e) => handleClick(e, lang)}>
                  <StyledIcon svg src={icon} />
                </SwipeElement>
              ))}
          </LanguageSwipe>
        </LanguageWrapper>
        <div style={{ width: '100%' }}>
          <StyledButton onClick={() => handleOpenModal('ABOUT_MODAL')}>{t('about')}</StyledButton>
          <StyledButton bottom onClick={() => handleOpenModal('LICENCE_MODAL')}>{t('licences')}</StyledButton>
          <StyledButton onClick={() => handleOpenModal('FORM_MODAL')}>{t('contact')}</StyledButton>
        </div>
      </StyledMenuContainer>
    </>
  );
};
