import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../styles/media';

const StyledHeader = styled.header`
  grid-area: header;
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
  max-width: 960px;
  padding: 1.45rem 0.5rem;
  ${media.m`
    padding: 1.45rem 2rem;
  `};
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const Header = ({ children }) => (
  <StyledHeader>
    <H1>{children}</H1>
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]), // eslint-disable-line
};

export default Header;
