import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const ImprintPage = () => (
  <Layout>
    <>
      <Helmet>
        <title>Imprint - wetainment</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Legal Disclosure</h1>

      <p>Information in accordance with Section §5 TMG (German Telemediengesetz)</p>
      <p>
        {process.env.RESPONSIBLE_NAME} <br />
        {process.env.RESPONSIBLE_STREET} <br />
        {process.env.RESPONSIBLE_CITY} <br />
      </p>

      <h2>Contact Information</h2>
      <p>
        Telephone: {process.env.RESPONSIBLE_PHONE} <br />
        E-Mail: {process.env.RESPONSIBLE_MAIL} <br />
        Internet address: {process.env.RESPONSIBLE_URL} <br />
      </p>

      <h2>Disclaimer</h2>

      <h3>Accountability for content</h3>
      <p>
        The contents of our pages have been created with the utmost care. However, we cannot
        guarantee the contents&apos; accuracy, completeness or topicality. According to statutory
        provisions, we are furthermore responsible for our own content on these web pages. In this
        matter, please note that we are not obliged to monitor the transmitted or saved information
        of third parties, or investigate circumstances pointing to illegal activity. Our obligations
        to remove or block the use of information under generally applicable laws remain unaffected
        by this as per §§ 8 to 10 of the Telemedia Act (TMG).
      </p>

      <h3>Accountability for links</h3>
      <p>
        Responsibility for the content of external links (to web pages of third parties) lies solely
        with the operators of the linked pages. No violations were evident to us at the time of
        linking. Should any legal infringement become known to us, we will remove the respective
        link immediately.
      </p>
    </>
  </Layout>
);

export default ImprintPage;
