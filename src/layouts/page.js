/* globals graphql */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import media from '../styles/media';
import StyledLink from '../layouts/link';
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
class Template extends Component {
  constructor(props, { setTitle }) {
    super(props);

    // set title in pageLayout
    const { markdownRemark: post } = props.data;
    setTitle(post.frontmatter.title);
  }
  render() {
    const { markdownRemark: post, readNext } = this.props.data;
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
      <Article>
        <Helmet
          title={`${post.frontmatter.title} - wetainment`}
          meta={meta}
        />
        <p>{JSON.stringify(post.frontmatter)}</p>
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
  }
}
/* eslint-enable react/no-danger */

Template.propTypes = {
  data: PropTypes.shape().isRequired,
};
// yes, we're using context. They'll provide a codemod if needs be... right...?
Template.contextTypes = {
  setTitle: PropTypes.func,
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
