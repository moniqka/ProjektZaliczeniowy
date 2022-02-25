import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, BackgroundOverlay, StyledIcon } from './Header.css';
import { SettingsMenu } from 'components/organisms/SettingsMenu/SettingsMenu';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledIcon
        style={{ zIndex: 4 }}
        onClick={goBack}
        className='fas fa-home'
        size="lg"
      />
      <StyledIcon
        isOpen={isOpenMenu}
        style={{ zIndex: 4 }}
        onClick={toggleMenu}
        className={isOpenMenu ? 'fad fa-bars' : 'far fa-bars'}
        size="lg"
      />
      {isOpenMenu ? (
        <>
          <SettingsMenu></SettingsMenu>
          <BackgroundOverlay onClick={toggleMenu} />
        </>
      ) : null}
    </StyledHeader>
  );
};
