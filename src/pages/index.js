/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from 'gatsby-link';
// import Helmet from 'react-helmet';
import ArrowIcon from 'react-icons/lib/ti/arrow-right';

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

const ReadLink = styled(StyledLink)`
  padding: 5px 0;
  display: inline-block;
`;

const Date = styled.div`
  margin: 0;
  padding: 0 5px 0 0;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
`;

const Category = styled.div`
  margin: 0;
  color: #dc680b;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
`;

const PostExcerpt = styled.div`color: #222;`;

const H1 = styled.h1`margin: 0;`;

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <StyledWrapper>
      {posts
        .filter(
          post => post.node.frontmatter.title.length > 0 && post.node.frontmatter.layout === 'post',
        )
        .map(({ node: post }) =>
          (<PostPreviewWrapper key={post.id}>
            <Date>
              {String(post.frontmatter.date).toUpperCase()}
            </Date>
            <Category>
              {String(post.frontmatter.category).toUpperCase()}
            </Category>
            <H1>
              <PostLink to={post.frontmatter.path}>
                {post.frontmatter.title}
              </PostLink>
            </H1>
            <PostExcerpt>
              {post.excerpt}
            </PostExcerpt>
            <ReadLink data-nav to={post.frontmatter.path}>
              <ArrowIcon />Read
            </ReadLink>
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
            date(formatString: "MMMM YYYY")
            path
            layout
            author
            category
          }
        }
      }
    }
  }
`;
