import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>About me - wetainment</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1>About me</h1>
    <p>
      My personal portfolio page. I'm a software developer living kind of in the
      center of Germany.
    </p>
    <p>
      Working for a great medium sized company doing development and consulting
      in SAP environments.
    </p>
    <p>
      Personally interested in all thinks JS, this is what I'm talking about
      here mostly.
    </p>
  </Layout>
);

export default ContactPage;
