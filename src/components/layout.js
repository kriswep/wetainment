import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';
import 'typeface-roboto'; // eslint-disable-line import/extensions

import theme from '../styles/theme';
import media from '../styles/media';

import Header from '../layouts/header';
import StyledLink from '../layouts/link';

import Sidebar from '../layouts/sidebar';
import Footer from '../layouts/footer';
import Cookie from '../components/Cookie';

import '../layouts/index.css';

const StyledWrapper = styled.section`
  min-height: 100vh;
  background: ${props => props.theme.lightShades};
  line-height: 1.625rem;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 17.5rem 1fr;
  grid-template-rows: auto 1fr auto auto;
  grid-template-areas:
    'header header header' 'content content content' 'sidebar sidebar sidebar'
    'footer footer footer';
  ${media.m`
  grid-gap: 10px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header" "sidebar content content" "footer footer footer";
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

const MainHeader = ({ title }) => (
  <Header>
    <StyledLink to="/" data-head>
      {title}
    </StyledLink>
  </Header>
);
MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  padding: 0.5rem;
  border-top: solid 1px ${props => props.theme.lightestAccent};
  ${media.m`
    padding: 1rem;
    border-top: none;
    border-right: solid 1px ${props => props.theme.lightestAccent};
  `};
`;

const ContentWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  grid-area: content;
  padding: 0.5rem;
  ${media.m`
    padding: 1rem;
  `};
`;

const TemplateWrapper = props => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={props.title}
        meta={[
          {
            name: 'description',
            content:
              "wetainment is Christoph Benjamin's personal blog and portfolio. Writing about JavaScript",
          },
          { name: 'keywords', content: 'blog, portfolio, JavaScript' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@kriswep' },
          { name: 'twitter:title', content: 'wetainment' },
          {
            name: 'twitter:description',
            content:
              "wetainment is Christoph Benjamin's personal blog and portfolio. Writing mostly about JavaScript",
          },
        ]}
      />

      <MainHeader title={props.title} />
      <StyledSidebar />
      <ContentWrapper>{props.children}</ContentWrapper>
      <Footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤
          </span>{' '}
          by <a href="https://twitter.com/kriswep">@kriswep</a>
          <StyledLink to="/privacy" style={{ position: 'absolute', right: '10px' }} data-underline>
            Privacy
          </StyledLink>
        </p>
      </Footer>
      <Cookie />
    </StyledWrapper>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object, // eslint-disable-line
  title: PropTypes.string,
};
TemplateWrapper.defaultProps = {
  title: 'wetainment',
};

export default TemplateWrapper;
