import React from 'react';
import Helmet from 'react-helmet';

const PrivacyPage = () =>
  (
    <div>
      <Helmet
        title="Privacy Policy - wetainment"
        meta={[{ name: 'robots', content: 'noindex' }]}
      />
      <h1>Privacy Policy</h1>

      <p>
        This Policy describes the information we collect from you,
        how we use that information and our legal basis for doing so.
        It also covers whether and how that information may be shared and your rights
        and choices regarding the information you provide to us.
      </p>

      <p>This Privacy Policy applies to the information that we obtain through your use of <a href="https://wetainment.com">wetainment</a> website including its subdomains.</p>

      <h2>Table of contents</h2>

      <p><a href="#who">Who we are</a></p>

      <p><a href="#what">What We Collect and Receive</a></p>

      <p><a href="#rights">Your Rights</a></p>

      <p><a href="#3rd">Third party services we use</a></p>

      <p><a href="#retention">Retention of data</a></p>

      <p><a href="#changes">Privacy Policy Changes</a></p>

      <p><a href="#contact">Contact Us</a></p>

      <h2><a name="who">Who we are</a></h2>

      <p>
        Wetainment is a free website and blog brought to you by an individual
        software developer and is supposed to be a place to share his thoughts,
        projects and work.
      </p>

      <p>
        Christoph Benjamin Weber is the legal representative of the wetainment project.
        If you have any questions about this privacy policy,
        please contact us at privacy@wetainment.com
      </p>

      <p>We will never sell your personal data to anyone.</p>

      <h2><a name="what">What We Collect and Receive</a></h2>

      <p>
        In order for us to provide you the best possible experience on our websites,
        we need to collect and process certain information. Depending on your use of the
        Services, that may include:
      </p>

      <ul>
        <li>Usage data — when you visit our site, we will store:
          the website from which you visited us from, the parts of our site you visit,
          the date and duration of your visit, your anonymised IP address,
          information from the device (device type, operating system, screen resolution,
          language, country you are located in, and web browser type) you used during your
          visit, and <a href="https://matomo.org/faq/general/faq_18254/">more</a>.
          We process this usage data for statistical purposes,
          to improve our site and to recognize and stop any misuse.
        </li>
        <li>Cookies — we use cookies (small data files transferred onto
          computers or devices by sites) for record-keeping purposes and
          to enhance functionality on our site. You may deactivate or restrict
          the transmission of cookies by changing the settings of your web browser.
           Cookies that are already stored may be deleted at any time.
        </li>
      </ul>


      <h2><a name="rights">Your Rights</a></h2>

      <p>
        You have the right to be informed of Personal Data processed by wetainment,
        a right to rectification/correction, erasure and restriction of processing.
        You also have the right to ask from us a structured, common and machine-readable
        format of Personal Data you provided to us.
      </p>

      <p>
        We can only identify you via your email address and we can only adhere to your
        request and provide information if we have Personal Data about you through you
        having made contact with us directly and/or you using our site and/or service.
        We cannot provide, rectify or delete any data that we store on behalf of our users
        or customers.
      </p>

      <p>
        To exercise any of the rights mentioned in this Privacy Policy and/or in the event
        of questions or comments relating to the use of Personal Data you may contact
        us via email: privacy@wetainment.com
      </p>

      <p>In addition, you have the right to lodge a complaint with the data protection
        authority in your jurisdiction.
      </p>

      <h2><a name="3rd">Third party services we use</a></h2>

      <p>When you visit our websites, or purchase products or services, we use the following
        third party services which may collect personal data:
      </p>

      <table style={{ width: '100%' }}>
        <tr>
          <th>Recipient</th>
          <th>Purpose of processing</th>
          <th>Lawful basis</th>
          <th>Data location and security</th>
          <th>Personal data collected by the third party</th>
          <th>Privacy policy</th>
        </tr>
        <tr>
          <td><a href="https://www.scaleway.com/">Scaleway</a></td>
          <td>Hosting, website upkeeping and related infrastructure.</td>
          <td>Legitimate interest</td>
          <td>France, Netherlands</td>
          <td>IP address, access meta information</td>
          <td><a href="https://www.scaleway.com/terms/privacy/">link</a></td>
        </tr>
        <tr>
          <td><a href="https://www.digitalocean.com/">DigitalOcean</a></td>
          <td>Hosting, website upkeeping and related infrastructure.</td>
          <td>Legitimate interest</td>
          <td>Germany</td>
          <td>IP address, access meta information</td>
          <td><a href="https://www.digitalocean.com/legal/privacy/">link</a></td>
        </tr>
        <tr>
          <td><a href="https://zeit.co/now">ZEIT / Now</a></td>
          <td>Hosting, website upkeeping and related infrastructure. Authentication helper to GitHub.</td>
          <td>Legitimate interest</td>
          <td>USA</td>
          <td>IP address, access meta information</td>
          <td><a href="https://zeit.co/privacy">link</a></td>
        </tr>
        <tr>
          <td><a href="https://github.com/">GitHub</a></td>
          <td>Reading and writing issues under you username as comments.</td>
          <td>Legitimate interest</td>
          <td>Germany</td>
          <td>IP address, access meta information</td>
          <td><a href="https://help.github.com/articles/github-privacy-statement/">link</a></td>
        </tr>
      </table>

      <p>
        In addition to that, we set links to external sites. We try our best to do that responsible,
        but are not responsible for their content or other legal concerns.
      </p>

      <h2><a name="retention">Retention of data</a></h2>

      <p>We will retain your information as long as necessary to provide you with the
        services or as otherwise set forth in this Policy. We will also retain and use
        this information as necessary for the purposes set out in this Policy and to the
        extent necessary to comply with our legal obligations, resolve disputes, enforce
        our agreements and protect our legal rights.
      </p>

      <p>We also collect and maintain aggregated, anonymized or pseudonymized information
        which we may retain indefinitely to protect the safety and security of our Site,
        improve our Services or comply with legal obligations.
      </p>

      <h2><a name="changes">Privacy Policy Changes</a></h2>
      <p>We may update this Policy from time to time. If we do, we’ll let you know about
        any material changes, either by notifying you on the website or by sending you an email.
      </p>

      <h2><a name="contact">Contact Us</a></h2>

      <p>E-Mail: privacy@wetainment.com</p>

    </div>
  );

export default PrivacyPage;
