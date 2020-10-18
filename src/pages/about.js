import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/layout';
// import Link from '../components/Link';

const Link = styled.a`
  color: ${(props) => props.theme.darkAccent};
`;

const PortfolioImage = styled.img`
  max-width: 400px;
  float: left;
  margin: 0 1em 1em 0;
`;

const Technologies = styled.p`
  clear: both;
`;

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
      spare time projects using these technologies, which can be found on{' '}
      <Link href="https://github.com/kriswep">Github</Link>.
    </p>
    <h2>Portfolio</h2>
    <p>
      Here's some of the work I've done in recent years. All of them are my
      spare time projects since these are the ones I can talk about freely. I
      also have some smaller projects and tutorials, which can be found either
      here on my blog or on{' '}
      <Link href="https://github.com/kriswep">Github</Link>.
      <br />
      Of course, I also worked on a lot of different projects and products at my
      full-time job, please send me an inquiry per{' '}
      <Link href="mailto:kriswep@wetainment.com">mail</Link> if you want to
      learn more about these for some reason.
    </p>
    <h3>AndTeam - Estimations (2019)</h3>
    <p>
      <span>URL:</span>{' '}
      <Link href="https://estimation.andteam.app">estimation.andteam.app</Link>
      <br />
      <span>Code:</span>{' '}
      <Link href="https://github.com/kriswep/tpp">GitHub</Link>
    </p>
    <PortfolioImage
      src="/estimation.gif"
      alt="Screenflow of the estimation process"
    />
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
    <Technologies>
      <strong>Used technologies:</strong> React for the frontend, WebRTC and
      WebSockets for communication between the clients.
    </Technologies>

    <h3>Balloon Game (2012)</h3>
    <p>
      <span>URL:</span>{' '}
      <Link href="https://play.wetainment.com/balloon">
        play.wetainment.com/balloon
      </Link>
      <br />
      <span>Code:</span>{' '}
      <Link href="https://github.com/kriswep/balloon/">GitHub</Link>
    </p>
    <PortfolioImage src="/balloon.gif" alt="A round of playing balloon" />
    <p>
      Balloon is an HTML5 Canvas-based game played in the browser. It is best
      played on mobile devices. The main part was developed during the holidays
      in 2012, the game was later refined to use service workers for full
      offline support and sound was added.
    </p>
    <p>
      The gameplay was inspired by fruit ninja. The player has to catch balloons
      as they fly towards the sky by touching them. The target audience is
      preschool children. My children still enjoy to play balloon from time to
      time, so it was well worth creating it.
    </p>
    <Technologies>
      <strong>Used technologies:</strong> Frameworkless frontend, rendered in
      HTML5-Canvas. Hand-drawn graphics. Web audio is used for generating sound
      effects during runtime. The game can be played offline thanks to the usage
      of service workers.
    </Technologies>

    <h3>Socsur - German (2008)</h3>
    <p>
      <span>URL:</span> <Link href="http://www.socsur.de">www.socsur.de</Link>
    </p>
    <PortfolioImage src="/socsur.png" alt="A poll result chart" />
    <p>
      Socsur is a platform for creating and sharing simple one question polls.
      It is my first fullscale web project written during my time at university.
      Socsur uses a custom made PHP based backend and templating engine for
      rendering the frontend.
    </p>
    <p>
      It was possible to register a user, but not necessary. This reduced the
      friction to create a poll. Also, some people embedded the polls on their
      own homepage. Due to low time for maintenance and promoting, user interest
      declined and Socsur was put in a read-only mode.
    </p>
    <Technologies>
      <strong>Used technologies:</strong> Custom written PHP backend connected
      to a MySQL database. Bootstrap powered frontend.
    </Technologies>
  </Layout>
);

export default ContactPage;
