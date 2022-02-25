import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { font, color } = theme;
const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap&subset=latin-ext');

  html {
    height:100%;
    font-family:${font.family};
    scroll-behavior: smooth;
  }
  #root{
    height:100%;
    max-height: -webkit-fill-available;
    max-height: -moz-available;
  }

  body {
    width:100%;
    height:100%;
    max-height:100%;
    background-color: ${color.background.main};
    scroll-behavior: smooth;
  }

  * { 
    font-family:${font.family};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-color: ${(props) => props.theme.color.primary} ${(props) => props.theme.color.light};
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  
    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.color.light};
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.primary};
      border-radius: 10px;
    }
    /* font-size: calc(0.8em + 0.2vw); */
  }
  
  ul {
    list-style-type:none;
  }

  a {
    text-decoration:none;
  }

  p {
    font-size: 1rem;
    color: ${color.text.primary};
  }

  video {
    width: 100% !important;
    height: auto !important;
  }

  button{
    cursor:pointer;
  }

  input {
    border-radius: 0;
  }

  input[type="search"] {
    -webkit-appearance: none;
  }
  .clickable {
    cursor: pointer;
  }
  .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #2c2c2c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input:focus {
    background-position: 0 0;
    outline: none;
  };

  input[type="search"]::-webkit-search-cancel-button {
  display: none;
  };

  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  };

  .carousel .slide {
    margin: 0 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
export default GlobalStyles;
