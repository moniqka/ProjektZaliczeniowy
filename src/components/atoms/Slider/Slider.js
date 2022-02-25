import React,  {useState, useEffect} from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {StyledItem, StyledIcon, StyledText, StyledContainer} from './Slider.css';
import { useTranslation } from 'react-i18next';

export const SliderComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeType, setAciveType] = useState(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    fade: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  const data = [
    {
      ico: "fas fa-images",
      type: 'images',
      path: '/images'
    },
    {
      ico: "fad fa-camera-movie",
      type: 'movies',
      path: '/movies'
    },
    {
      ico: "fas fa-cat",
      type: 'cats',
      path: '/cats'
    },
    {
      ico: "fad fa-globe-europe",
      type: 'travel',
      path: '/travel'
    },
    {
      ico: "fas fa-quote-left",
      type: 'quotes',
      path: '/quotes'
    },
  ]
  const setActiveTab = (item) => {
    setAciveType(item.type);
    navigate(item.path);
  };
  useEffect(() => {
  }, [])

  return (
    <StyledContainer>
        <Slider {...settings}>
        {data.map((item => (
          <StyledItem
            active={item.type === activeType}
            onClick={() => setActiveTab(item)}
            key={item.type}>
            <StyledIcon
              active={item.type === activeType}
              size="xl"
              className={item.ico}
              colorType="extraColor"/>
            <StyledText>{t(`${item.type}`)}</StyledText>
        </StyledItem>
        )))}
        </Slider>
        </StyledContainer>
  )
}

