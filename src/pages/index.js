/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
// import Helmet from 'react-helmet';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 3px
  grid-template-columns: 1fr;
  @media (min-width: 512px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
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
          (<div
            className="blog-post-preview"
            key={post.id}
            style={{
              'grid-column': '1 span',
            }}
          >
            <h1>
              <Link
                to={post.frontmatter.path}
                style={{
                  color: '#222',
                  textDecoration: 'none',
                }}
              >
                {post.frontmatter.title}
              </Link>
            </h1>
            <h2
              style={{
                margin: 0,
                padding: 0,
                fontSize: '0.7rem',
              }}
            >
              {post.frontmatter.date}
            </h2>
            <p>
              {post.excerpt}
            </p>
          </div>),
        )}
    </StyledWrapper>
  );
};

Index.propTypes = {
  data: PropTypes.func.isRequired,
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
