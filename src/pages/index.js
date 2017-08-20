/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from 'gatsby-link';
// import Helmet from 'react-helmet';

import StyledLink from '../layouts/link';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 1fr;
  @media (min-width: 512px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const PostPreviewWrapper = styled.div`grid-column: 1 span;`;

const PostLink = styled(StyledLink)`
  color: #222;
`;

const H2 = styled.div`
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
`;

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <StyledWrapper className="blog-posts">
      {posts
        .filter(
          post => post.node.frontmatter.title.length > 0 && post.node.frontmatter.layout === 'post',
        )
        .map(({ node: post }) =>
          (<PostPreviewWrapper className="blog-post-preview" key={post.id}>
            <h1>
              <PostLink to={post.frontmatter.path}>
                {post.frontmatter.title}
              </PostLink>
            </h1>
            <H2>
              {post.frontmatter.date}
            </H2>
            <p>
              {post.excerpt}
            </p>
          </PostPreviewWrapper>),
        )}
    </StyledWrapper>
  );
};

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            path
            layout
            author
          }
        }
      }
    }
  }
`;
