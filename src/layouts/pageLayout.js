import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
// import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';
import 'typeface-roboto'; // eslint-disable-line import/extensions

import theme from '../styles/theme';
import media from '../styles/media';

import Header from './header';
import StyledLink from './link';

import Sidebar from './sidebar';
import './index.css';

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

const StyledFooter = styled.footer`
  grid-area: footer;
  font-size: 0.75rem;
  padding: 0.25rem;
  ${media.m`
    padding: 0.5rem;
  `} color: ${props => props.theme.darkShades};
  & a {
    color: ${props => props.theme.darkAccent};
  }
`;

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { pageTitle: 'wetainment' };
    this.setTitle = this.setTitle.bind(this);
  }
  getChildContext() {
    return { setTitle: this.setTitle };
  }

  setTitle(newTitle) {
    this.setState({ pageTitle: newTitle });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Helmet
            title={this.state.pageTitle}
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
          <MainHeader title={this.state.pageTitle} />
          <StyledSidebar />
          <ContentWrapper>
            {this.props.children(...{ setTitle: this.setTitle, ...this.props })}
          </ContentWrapper>
          <StyledFooter>
            <p>
              Made with{' '}
              <span role="img" aria-label="love">
                ❤
              </span>{' '}
              by <a href="https://twitter.com/kriswep">@kriswep</a>
            </p>
          </StyledFooter>
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func, // eslint-disable-line
};
// yes, we're using context. Need to push deep down, through gatsbys' magic.
// They'll provide a codemod if needs be... right...?
TemplateWrapper.childContextTypes = {
  setTitle: PropTypes.func,
};

export default TemplateWrapper;
