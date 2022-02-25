import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Paragraph = styled.p`
  font-size: ${({ isBig }) => (isBig ? '14px' : '12px')};
  color: ${({ theme: { color }, type }) => color.text[type]};
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
`;

Paragraph.propTypes = {
  isBig: PropTypes.bool,
  isActive: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'highlight', 'lightenSecondary']),
};

Paragraph.defaultProps = {
  isBig: false,
  isActive: false,
  type: 'primary',
};
