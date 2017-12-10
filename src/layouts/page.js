/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Comments from '../components/Comments';
import media from '../styles/media';
import StyledLink from '../layouts/link';

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
  margin: 0.5rem 0;
`;
const ReadNextHeader = styled.h6`
  margin: 0.1rem 0;
`;
const ReadNextDescription = styled.p`
  margin: 0.1rem 0;
  font-size: 0.8rem;
`;
const H1 = styled.h1`
  line-height: 2.5rem;
`;

/* eslint-disable react/no-danger */
const Template = ({ data }) => {
  const { markdownRemark: post, readNext } = data;
  return (
    <Article>
      {/* <Helmet title={`wetainment - ${post.frontmatter.title}`} /> */}
      <Helmet
        title={`${post.frontmatter.title} - wetainment`}
        meta={[
          { name: 'description', content: post.frontmatter.description },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: post.frontmatter.author },
          { name: 'twitter:title', content: post.frontmatter.title },
          { name: 'twitter:description', content: post.frontmatter.description },
        ]}
      />
      <header>
        <H1>{post.frontmatter.title}</H1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.frontmatter.date &&
        post.frontmatter.date !== 'Invalid date' && <em>Published {post.frontmatter.date}</em>}
      {readNext &&
        post.frontmatter.layout === 'post' && (
          <ReadNext>
            <ReadNextHeader>READ THIS NEXT:</ReadNextHeader>
            <StyledLink to={readNext.frontmatter.path}>{readNext.frontmatter.title}</StyledLink>
            <ReadNextDescription>{readNext.frontmatter.description}</ReadNextDescription>
          </ReadNext>
        )}
      {post.frontmatter.layout === 'post' &&
        post.frontmatter.issueNumber && <Comments issueNumber={post.frontmatter.issueNumber} />}
    </Article>
  );
};
/* eslint-enable react/no-danger */

Template.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath(
    $path: String = "/eclipse-for-node/"
    $readNext: String = "/eclipse-for-node/"
  ) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
    readNext: markdownRemark(frontmatter: { path: { eq: $readNext } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
