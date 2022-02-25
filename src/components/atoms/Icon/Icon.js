import React from 'react';
import PropTypes from 'prop-types';
import 'utils/fontAwesome';
import { StyledIcon } from './Icon.css';

export const Icon = ({ svg, icon, colorType, className, size, ...props }) => {
  const classList = `${className} ${icon}`;
  
  const iconSize = () => {
    switch (size) {
      case 'sm':
        return '15px';
      case 'md':
        return '20px';
      case 'lg':
        return '30px';
        case 'xl':
          return '50px';
      default:
        return '30px';
    }
  };
  return svg ? (
    <img src={icon} alt="" {...props} className={className} />
  ) : (
    <StyledIcon colorType={colorType} className={classList} size={iconSize()} {...props} />
  );
};

Icon.defaultProps = {
  svg: false,
  className: '',
  icon: '',
  size: 'sm',
  colorType: 'primary',
};

Icon.propTypes = {
  svg: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  colorType: PropTypes.string,
};
