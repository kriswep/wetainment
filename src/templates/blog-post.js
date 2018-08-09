import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';
import media from '../styles/media';
import StyledLink from '../components/Link';
import Comments from '../components/Comments';

const Article = styled.article`
  color: ${props => props.theme.darkShades};
  padding: 0;
  ${media.m`
    padding: 0 1rem;
  `};
  & a {
    color: ${props => props.theme.darkAccent};
  }
`;

const ReadNext = styled.footer`
  border-top: solid 1px ${props => props.theme.lightestAccent};
  margin: 2.5rem 0 0.5rem;
`;
const ReadNextHeader = styled.h6`
  margin: 0.1rem 0;
`;
const ReadNextDescription = styled.p`
  margin: 0.1rem 0;
  font-size: 0.8rem;
`;

/* eslint-disable react/no-danger */
const Template = (props) => {
  const { markdownRemark: post, readNext } = props.data;
  // <meta name="robots" content="noindex" />
  const meta = [
    { name: 'description', content: post.frontmatter.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: post.frontmatter.author },
    { name: 'twitter:title', content: post.frontmatter.title },
    { name: 'twitter:description', content: post.frontmatter.description },
  ];
  if (post.frontmatter.noindex) {
    meta.push({ name: 'robots', content: 'noindex' });
  }
  return (
    <Layout title={post.frontmatter.title}>
      <Article>
        <Helmet title={`${post.frontmatter.title} - wetainment`} meta={meta} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.date &&
          post.frontmatter.date !== 'Invalid date' && <em>Published {post.frontmatter.date}</em>}

        {post.frontmatter.layout === 'post' &&
          post.frontmatter.issueNumber && <Comments issueNumber={post.frontmatter.issueNumber} />}
        {readNext &&
          post.frontmatter.layout === 'post' && (
            <ReadNext>
              <ReadNextHeader>READ THIS NEXT:</ReadNextHeader>
              <StyledLink to={readNext.frontmatter.path}>{readNext.frontmatter.title}</StyledLink>
              <ReadNextDescription>{readNext.frontmatter.description}</ReadNextDescription>
            </ReadNext>
          )}
      </Article>
    </Layout>
  );
};
/* eslint-enable react/no-danger */

Template.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Template;

export const query = graphql`
  query($slug: String!, $readNext: String = "/eclipse-for-node/") {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        author
        layout
        readNext
        issueNumber
      }
    }
    readNext: markdownRemark(fields: { slug: { eq: $readNext } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
