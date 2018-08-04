import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = () => (
  <Layout>
    <h1>Contact me</h1>
    <p>
      If anyone wants to contact me, just send me a{' '}
      <Link href="https://twitter.com/kriswep">tweet</Link>. Or{' '}
      <Link href="mailto:kriswep@wetainment.com">mail</Link> me if you want to keep it between the
      two of us.
    </p>
  </Layout>
);

export default ContactPage;
