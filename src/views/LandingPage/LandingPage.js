import React, { useState, useEffect } from 'react';
import bagImg from '../../assets/ideas.jpg';
import { StyledImage, ImageContainer, StyledWelcomeTitle } from './LandingPage.css';
import { SliderComponent } from 'components/atoms/Slider/Slider';
import { useTranslation } from 'react-i18next';
import Spinner from 'components/atoms/Spinner/Spinner';

export const LandingPage = () => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // when it finishes loading, update the component state
      setImgLoaded(true);
    }
    img.src = bagImg; // by setting an src, you trigger browser download
  }, [])

  return (
    imgLoaded ?
    <>
      <ImageContainer>
        <StyledImage alt={'ideas background'} src={bagImg}></StyledImage>
      </ImageContainer>
      <StyledWelcomeTitle>{t('needInspiration')}</StyledWelcomeTitle>
      <SliderComponent></SliderComponent>
    </> :
    <Spinner></Spinner>
  )
}