import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Contact me - wetainment</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1>Contact me</h1>
    <p>
      If anyone wants to contact me, just send me a{' '}
      <a href="https://twitter.com/kriswep">tweet</a>. Or{' '}
      <a href="mailto:kriswep@wetainment.com">mail</a> me if you want to keep it
      between the two of us.
    </p>
  </Layout>
);

export default ContactPage;
