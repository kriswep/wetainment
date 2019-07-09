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
      My name is Christoph Benjamin Weber, I'm usually called by my middle name,
      Benjamin. I'm married and have three children.
    </p>
    <p>
      I started my professional career in software development after finishing
      my Computer Science studies at the University of Mannheim, Germany. My
      first job was in 2010 as a trainee at IMMOLOGIS GmbH, a software
      consultancy specializing in large-sized real estate companies using SAP
      software. Later I was hired as a full-time software developer at that same
      company. In late 2011 we were bought by one of our competitors, Promos
      consult GmbH &amp; Co. KG, where I'm still employed. Today, I focus on
      some of our products improving the rental process of our customers and
      enabling them to work mobile.
    </p>
    <p>
      Besides my full-time job, where I mostly work with SAP backend
      technologies, I like tinkering with modern frontend technologies.
      Currently, I enjoy the React and GraphQL stack the most and have some
      spare time projects, which can be found on{' '}
      <a href="https://github.com/kriswep">Github</a>.
    </p>
    <h2>Portfolio</h2>
    <p>
      Here's some of the work I've done in recent years. All of them are my
      spare time projects since these are the ones I can talk about freely. I
      also have some smaller projects and tutorials, which can be found either
      here on my blog or on <a href="https://github.com/kriswep">Github</a>.
      <br />
      Of course, I also worked on a lot of different projects and products at my
      full-time job, please send me an inquiry per{' '}
      <a href="mailto:kriswep@wetainment.com">mail</a> if you want to learn more
      for some reason.
    </p>
    <h3>AndTeam - Estimations (2019)</h3>
    <p>
      <span>URL:</span>{' '}
      <a href="https://estimation.andteam.app">estimation.andteam.app</a>
      <span>Code:</span> <a href="https://github.com/kriswep/tpp">GitHub</a>
    </p>
    <p>
      AndTeam - Estimations allows teams to connect together and estimate their
      tasks more reliable. It is inspired by the planning poker concepts in
      agile software development. Every team member should connect to the same
      session, and give their estimation to each task represented by story
      points. After everybody picked their estimated number, the cards are
      revealed and the outliers should be discussed. This is repeated until a
      consensus is reached. AndTeam - Estimations gives a nice animated frontend
      to these sessions, and allows product owners to moderate and steer the
      estimation session.
    </p>
    <img src="/estimation.gif" alt="Screenflow of the estimation process" />
    <p>
      <strong>Used technologies:</strong> React for the frontend, WebRTC and
      WebSockets for communication between the clients.
    </p>
  </Layout>
);

export default ContactPage;
