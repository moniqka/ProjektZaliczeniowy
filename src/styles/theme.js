import { LightenDarkenColor } from 'utils/lightenDarkenColor';

export const breakpoint = {
  xs: '320px',
  s: '360px',
  m: '480px',
  l: '768px',
  xl: '1024px',
  xxl: `1200px`,
};

const getMedia = (fontS, fontM = fontS, fontL = fontM, fontXXL = fontM) =>
  `@media(max-width:${breakpoint.m}){  
  font-size:${fontM} !important;
  }
  @media (max-width:${breakpoint.s}){
    font-size:${fontS} !important;
  }
  @media(min-width:${breakpoint.m}){
    font-size:${fontL} !important;
  }
  @media(min-width:${breakpoint.xxl}){
    font-size:${fontXXL} !important;
  }
  `;

const theme = {
  font: {
    family: "'Roboto', sans-serif",
    title: "'Bangers', cursive",
    funny: "'Gloria Hallelujah', cursive",
  },

  breakpoint,
  fontSize: {
    // eslint-disable-next-line
    s: getMedia('1rem', '1rem', '1.2rem', '1.4rem'),
    // eslint-disable-next-line
    m: getMedia('1.2rem', '1.2rem', '1.4rem', '1.6rem'),
    // eslint-disable-next-line
    l: getMedia('1.2rem', '1.4rem', '1.6rem', '1.8rem'),
  },
  color: {
    primary: '#ffffff',
    secondary: '#dfc6a7',
    tertiary: '#745841',
    light: '#ffffff',
    dark: '#000000',
    background: {
      main: '#f2f2f2',
      mainDisabled: LightenDarkenColor('#f2f2f2', -3),
      secondary: '#ffc510',
      white: '#ffffff', //  background color of elements with class .container
    },
    headerContent: '#2c2c2c',
    button: {
      default: '#dfc6a7',
      disabled: LightenDarkenColor('#dfc6a7', -30),
      active: LightenDarkenColor('#dfc6a7', 5),
    },
    text: {
      primary: '#745841', // main text color
      secondary: '#616161', // secobdary text color (for icons or dark background)
      lightenSecondary: LightenDarkenColor('#616161', -20),
      tertiary: '#ffffff',
      footer: '#ffffff',
    },
  },
};

export default theme;
