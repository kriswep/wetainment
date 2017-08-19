import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';

import Sidebar from './sidebar';
import './index.css';

const Header = () =>
  (<header
    style={{
      background: 'palevioletred',
      gridArea: 'header',
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: '1.45rem 0',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          wetainment
        </Link>
      </h1>
    </div>
  </header>);

const StyledWrapper = styled.section`
  min-height: 100vh;
  background: papayawhip;
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
        { name: 'keywords', content: 'blog, portfolio' },
      ]}
    />
    <Header />
    <Sidebar />
    <div
      style={{
        maxWidth: 960,
        padding: '0',
        gridArea: 'content',
      }}
    >
      {children()}
    </div>
    <footer
      style={{
        fontSize: '0.75rem',
        gridArea: 'footer',
      }}
    >
      <p>
        Made with ❤ by <a href="https://twitter.com/kriswep">@kriswep</a>
      </p>
    </footer>
  </StyledWrapper>);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
