import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';
import 'typeface-roboto'; // eslint-disable-line import/extensions

import StyledLink from './link';

import Sidebar from './sidebar';
import './index.css';

const StyledWrapper = styled.section`
  min-height: 100vh;
  background: #fafafa;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 17.5rem 1fr;
  grid-template-rows: auto 1fr auto auto;
  grid-template-areas: "header header header" "content content content" "sidebar sidebar sidebar"
    "footer footer footer";
  @media (min-width: 768px) {
    grid-gap: 10px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "sidebar header header" "sidebar content content" "footer footer footer";
  }
  @media (min-width: 1024px) {
    grid-template-columns: 20rem 1fr;
  }
`;

const StyledHeader = styled.header`
  grid-area: header;
  border-bottom: solid 1px #eee;
  max-width: 960px;
  padding: 1.45rem 0;
  margin: 0;
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const Header = () =>
  (<StyledHeader>
    <H1>
      <StyledLink to="/" data-head>
        wetainment
      </StyledLink>
    </H1>
  </StyledHeader>);

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  border-top: solid 1px #eee;
  @media (min-width: 768px) {
    border-top: none;
    border-right: solid 1px #eee;
  }
`;

const ContentWrapper = styled.div`
  max-width: 960px;
  padding: 0;
  grid-area: content;
`;

const StyledFooter = styled.footer`
  grid-area: footer;
  font-size: 0.75rem;
`;

const TemplateWrapper = ({ children }) =>
  (<StyledWrapper>
    <Helmet
      title="wetainment"
      meta={[
        {
          name: 'description',
          content:
            "wetainment is Christoph Benjamin's personal blog and portfolio. Writing about JavaScript",
        },
        { name: 'keywords', content: 'blog, portfolio, JavaScript' },
      ]}
    />
    <Header />
    <StyledSidebar />
    <ContentWrapper>
      {children()}
    </ContentWrapper>
    <StyledFooter>
      <p>
        Made with ❤ by <a href="https://twitter.com/kriswep">@kriswep</a>
      </p>
    </StyledFooter>
  </StyledWrapper>);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
