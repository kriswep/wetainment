/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from './header';
import media from '../styles/media';
import StyledLink from '../layouts/link';
import Comments from '../components/Comments';
import { setTimeout } from 'timers';

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
// const H1 = styled.h1`
//   line-height: 2.5rem;
// `;
// const StyledHeader = styled.header`
//   grid-area: header;
//   border-bottom: solid 1px ${props => props.theme.lightestAccent};
//   max-width: 960px;
//   padding: 1.45rem 0.5rem;
//   ${media.m`
//     padding: 1.45rem 2rem;
//   `};
// `;

/* eslint-disable react/no-danger */
const Template = ({ setTitle, data }) => {
  console.log('setTitle!!!!!!!!!!!!!!!1', setTitle);
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
      <Header>{post.frontmatter.title}</Header>
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
