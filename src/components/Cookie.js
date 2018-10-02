import React from 'react';
import { Link } from 'gatsby';

import { Cookies, CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';

const cookies = new Cookies(/* Your cookie header, on browsers defaults to document.cookie */)


const styles = {
  banner: {
    position: 'absolute',
    bottom: 0,
    height: 'auto',
  },
  message: {
    display: 'block',
    padding: '10px',
    paddingRight: '100px',
    lineHeight: '1.3rem',
  },
  link: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
};

const message = "We use cookies to provide our services and for analytics, offering a better experience. By continuing to browse the site you're agreeing to our use of cookies. For more infos, see our";

const Cookie = () => (
  <CookiesProvider cookies={cookies}>
    <CookieBannerUniversal
      styles={styles}
      message={message}
      link={(<Link to="/privacy">privacy policy</Link>)}
    />
  </CookiesProvider>
);

export default Cookie;
