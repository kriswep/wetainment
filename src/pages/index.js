/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from 'gatsby-link';
// import Helmet from 'react-helmet';
import ArrowIcon from 'react-icons/lib/ti/arrow-right';

import media from '../styles/media';
import StyledLink from '../layouts/link';

const StyledWrapper = styled.div`
  color: ${props => props.theme.darkShades};
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 1fr;

  ${media.s`
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  `};
  ${media.m`
    grid-template-columns: 1fr;
  `};
  ${media.l`
    grid-template-columns: 1fr 1fr;
  `};
`;

const PostPreviewWrapper = styled.div`
  grid-column: 1 span;
  padding: 0;
  ${media.m`
    padding: 1rem;
  `};
`;

const PostLink = styled(StyledLink)`
  color: ${props => props.theme.darkShades};
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
  color: ${props => props.theme.main};
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
`;

const PostExcerpt = styled.div`color: ${props => props.theme.darkShades};`;

const H1 = styled.h1`
  margin: 0;
  padding: 0 0 1rem 0;
  line-height: 2.5rem;
`;

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
              {post.frontmatter.description || post.excerpt}
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
            description
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
