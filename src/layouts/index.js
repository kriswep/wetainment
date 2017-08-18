import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';

import './index.css';

const Header = () =>
  (<header
    style={{
      background: 'palevioletred',
      marginBottom: '1.45rem',
      'grid-area': 'header',
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

// Create a Wrapper component that'll render a <section> tag with some styles
const StyledWrapper = styled.section`
  background: papayawhip;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px 1fr;
  grid-template-areas: ". header header" "sidebar content content" "sidebar footer footer";
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
    <aside
      style={{
        'font-size': '0.5rem',
        'grid-area': 'sidebar',
      }}
    >
      <nav />
    </aside>
    <div
      style={{
        maxWidth: 960,
        padding: '0',
        'grid-area': 'content',
      }}
    >
      {children()}
    </div>
    <footer
      style={{
        'font-size': '0.75rem',
        'grid-area': 'footer',
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
