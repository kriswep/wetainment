import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import GlobalStyle from './global.style';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  color: var(--header-text-color, #000000);
  padding: var(--header-padding);
  background: conic-gradient(
    from 90deg at 49.32% 100%,
    #f5de09 -41.75deg,
    #ac9b00 62.3deg,
    #f5de09 318.25deg,
    #ac9b00 422.3deg
  );
  h1 {
    margin: var(--header-h1-margin);
    padding: 0;
    font-weight: 900;
    font-size: var(--header-h1-font-size);
    line-height: var(--header-h1-line-height);
    max-width: 45rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: var(--header-h2-font-size);
    line-height: var(--header-h2-line-height);
    max-width: 40rem;
  }
  h3,
  li,
  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: var(--header-h3-font-size);
    line-height: var(--header-h3-line-height);
  }
  nav {
    display: flex;
    max-width: 50rem;
  }
  ul {
    display: flex;
    margin-left: auto;
  }
  li {
    list-style: none;
    margin-left: 2.25rem;
  }
  a {
    color: inherit;
  }
  a:not(.active) {
    box-shadow: none;
  }

  @media (max-width: 27rem) {
    nav {
      display: block;
    }
    li:first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 18.75rem) {
    nav {
      display: block;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    li,
    li:first-child {
      margin-left: auto;
    }
  }
`;

const Main = styled.main`
  color: var(--main-text-color, #f0eed6);
  padding: var(--main-padding);
  & > div {
    max-width: 50rem;
  }
  a {
    color: inherit;
  }
`;

const Footer = styled.footer`
  color: var(--footer-text-color, #f5de09);
  padding: var(--footer-padding);
  margin-top: auto;
  background: var(--footer-bg-color);
  a {
    color: inherit;
    box-shadow: none;
  }
  p {
    display: flex;
    margin: 0;
  }
  .side {
    margin-left: auto;
  }
  .side a {
    margin: var(--footer-side-margin);
  }
  .side a:first-child {
    margin-left: 0;
  }
`;

const Layout = ({ siteTitle, pageTitle, pageSubTitle, children }) => {
  const header = (
    <Header>
      <nav>
        <h3>
          <Link to={`/`}>{siteTitle}</Link>
        </h3>
        <ul>
          <li>
            <Link to={`/`} activeClassName="active">
              Articles
            </Link>
          </li>
          <li>
            <Link to={`/about`} activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to={`/contact`} activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {pageTitle && <h1>{pageTitle}</h1>}
      {pageSubTitle && <h2>{pageSubTitle}</h2>}
    </Header>
  );
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        {header}
        <Main>
          <div>{children}</div>
        </Main>
        <Footer>
          <p>
            <span>
              Made with ❤ by <a href="https://twitter.com/kriswep">@kriswep</a>
            </span>
            <span className="side">
              <Link to={`/privacy`}>Privacy</Link>
              <Link to={`/imprint`}>Imprint</Link>
            </span>
          </p>
        </Footer>
      </PageWrapper>
    </>
  );
};

export default Layout;
