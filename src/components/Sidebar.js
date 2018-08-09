import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import MailIcon from 'react-icons/lib/fa/envelope-o';
import profile from '../img/profile.jpg';

import media from '../styles/media';
import StyledLink from './Link';

const Aside = styled.aside`
  color: ${props => props.theme.darkShades};
  text-align: center;
`;

const ProfileImage = styled.img`
  display: none;
  border-radius: 50%;
  ${media.m`
    display: inline;
  `};
`;

const H1 = styled.h1`
  font-size: 1.2rem;
`;

const NavLink = styled(StyledLink)`
  text-decoration: underline;
  color: ${props => props.theme.darkShades};
  font-weight: bold;
  display: inline-block;
  padding: 0.4rem 1rem 0.4rem 0;
  margin: 0.2rem 0.2rem 0.2rem 0;
  ${media.m`
    display: block;
    padding: 0.4rem 0;
    margin: 0.2rem 0;
  `};
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  display: inline-block;
  padding: 0.2rem 1rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  text-decoration: none;
  background-color: ${props => props.theme.lightestAccent};
  color: ${props => props.theme.darkShades};
`;

const Sidebar = ({ className }) => (
  // const Sidebar = () =>
  <Aside className={className}>
    <header>
      <StyledLink to="/">
        <ProfileImage src={profile} alt="Portrait showing myself" />
      </StyledLink>
      <H1>
        <StyledLink data-nav to="/">
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
      <SocialLink href="https://twitter.com/kriswep">
        <TwitterIcon />
      </SocialLink>
      <SocialLink href="https://github.com/kriswep">
        <GithubIcon />
      </SocialLink>
      <SocialLink href="mailto:kriswep@wetainment.com">
        <MailIcon />
      </SocialLink>
    </nav>
  </Aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: PropTypes.string,
};

export default Sidebar;
