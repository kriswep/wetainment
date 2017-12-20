import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../styles/media';

const StyledHeader = styled.header`
  grid-area: header;
  background: ${props => props.theme.main};
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
  padding: 1.45rem 0;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 17.5rem 1fr;
  ${media.m`
  grid-gap: 10px;
  `} ${media.l`
    grid-template-columns: 20rem 1fr;
  `} ${media.xl`
    grid-template-columns: 35rem 1fr;
  `} ${media.xxl`
    grid-template-columns: 50rem 1fr;
  `} ${media.xxxl`
    grid-template-columns: 70rem 1fr;
  `} ${media.uxxxl`
    grid-template-columns: 100rem 1fr;
  `};
`;

const H1 = styled.h1`
  line-height: 2rem;
  margin: 0;
  padding: 0.5rem;
  ${media.m`
    grid-column: 2;
    padding: 1rem 2rem;
  `};
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
