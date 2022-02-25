import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from 'components/molecules/Header/Header';
import backgImg from '../../assets/background.jpg'
import { breakpoint } from 'styles/theme';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  @media (min-width: ${breakpoint.xl}) {
    padding-top: 60px;
  }
  &::before {
    content: "";
    background-image: url(${backgImg});
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;

const MainTemplate = ({ children }) => (
  <>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node,
};
MainTemplate.defaultProps = {
  children: null,
};

export default MainTemplate;
