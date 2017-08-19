import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Link from 'gatsby-link';

import StyledLink from './link';

// const Sidebar = ({ data }) =>
const Sidebar = () =>
  (<aside
    style={{
      gridArea: 'sidebar',
    }}
  >
    <header>
      <StyledLink to="/">
        <img style={{ borderRadius: '50%' }} src="../img/photo.jpg" alt="Portrait showing myself" />
      </StyledLink>
      <h1>
        <StyledLink to="/">Christoph Benjamin Weber</StyledLink>
      </h1>
      <p>My personal blog/portfolio. ABAP at day, JS at night.</p>
    </header>
    <nav>
      <StyledLink to="/">Articles</StyledLink>
      <StyledLink to="/about">About me</StyledLink>
      <StyledLink to="/contact">Contact me</StyledLink>
    </nav>
  </aside>);

// Sidebar.defaultProps = {
//   data: PropTypes.func,
// };

export default Sidebar;
