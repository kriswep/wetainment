import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from 'gatsby-link';

import StyledLink from './link';

const ProfileImage = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;

const H1 = styled.h1`font-size: 1.2rem;`;

const NavLink = styled(StyledLink)`
  text-decoration: underline;
  color: #222;
  font-weight: bold;
  display: inline-block;
  padding: 0.4rem 1rem 0.4rem 0;
  margin: 0.2rem 0.2rem 0.2rem 0;
  @media (min-width: 768px) {
    display: block;
  padding: 0.4rem 0;
  margin: 0.2rem 0;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  padding: 0.4rem 1rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  text-decoration: none;
  background-color: #eee;
  color: black;
`;

// const Sidebar = ({ data }) =>
const Sidebar = () =>
  (<aside
    style={{
      gridArea: 'sidebar',
    }}
  >
    <header>
      <StyledLink to="/">
        <ProfileImage
          style={{ borderRadius: '50%' }}
          src="../img/photo.jpg"
          alt="Portrait showing myself"
        />
      </StyledLink>
      <H1>
        <StyledLink nav to="/">
          Christoph Benjamin Weber
        </StyledLink>
      </H1>
      <p>My personal blog/portfolio. ABAP at day, JS at night.</p>
    </header>
    <nav>
      <NavLink to="/">Articles</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/contact">Contact me</NavLink>
    </nav>

    <nav>
      <SocialLink href="https://twitter.com/kriswep">T</SocialLink>
      <SocialLink href="https://github.com/kriswep">G</SocialLink>
      <SocialLink href="mailto:kriswep@wetainment.com">M</SocialLink>
    </nav>
  </aside>);

// Sidebar.defaultProps = {
//   data: PropTypes.func,
// };

export default Sidebar;
