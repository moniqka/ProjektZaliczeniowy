import React from 'react';
import PropTypes from 'prop-types';
import 'utils/fontAwesome';
import { useTranslation } from 'react-i18next';
import { SearchInputContainer, StyledInput, StyledIcon } from './SearchInput.css';

export const SearchInput = ({ clearInput, ...props }) => {

  const { t } = useTranslation();
  const iconType = props.value ? 'fal fa-times' : 'far fa-search';

  return (
    <SearchInputContainer>
      <StyledInput autoComplete="off" type="search" id="search" placeholder={t('searchTitle')} {...props} />
      <StyledIcon onClick={clearInput} className={iconType} size="sm"></StyledIcon>
    </SearchInputContainer>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  clearInput: PropTypes.func,
};

SearchInput.defaultProps = {
  value: '',
  clearInput: () => {},
};
