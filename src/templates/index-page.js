import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'gatsby';
// import Helmet from 'react-helmet';
import ArrowIcon from 'react-icons/lib/ti/arrow-right';

import Layout from '../components/Layout';
import media from '../styles/media';
import StyledLink from '../components/Link';

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
  padding: 0 0 1rem 0;
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

const PostExcerpt = styled.div`
  color: ${props => props.theme.darkShades};
`;

const H1 = styled.h1`
  margin: 0;
  line-height: 2.5rem;
  padding: 0 0 0.5rem 0;
  ${media.m`
    padding: 0 0 1rem 0;
  `};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 span;
  padding: 0 0 1rem 0;

  ${media.s`
    grid-column: 2 span;
  `};
  ${media.m`
    grid-column: 1 span;
    padding: 1rem;
  `};
  ${media.l`
    grid-column: 2 span;
  `};
`;

const PaginationLink = styled(StyledLink)`
  padding: 5px 0;
  display: inline-block;
`;

const Index = ({ pageContext }) => {
  const {
    group, index, first, last,
  } = pageContext;

  return (
    // const { edges: posts } = data.allMarkdownRemark;
    <Layout>
      <StyledWrapper>
        {group
          .filter(post =>
              post.node.frontmatter.title.length > 0 && post.node.frontmatter.layout === 'post')
          .map(({ node: post }) => (
            <PostPreviewWrapper key={post.id}>
              <Date>{String(post.frontmatter.date).toUpperCase()}</Date>
              <Category>{String(post.frontmatter.category).toUpperCase()}</Category>
              <H1>
                <PostLink to={post.frontmatter.path}>{post.frontmatter.title}</PostLink>
              </H1>
              <PostExcerpt>{post.frontmatter.description || post.excerpt}</PostExcerpt>
              <ReadLink data-nav to={post.frontmatter.path}>
                <ArrowIcon />
                Read
              </ReadLink>
            </PostPreviewWrapper>
          ))}
        <PaginationWrapper>
          {!first && (
            <PaginationLink data-nav to={index > 2 ? `/p/${index - 1}` : '/'}>
              Newer posts
            </PaginationLink>
          )}
          {!last && (
            <PaginationLink data-nav to={`/p/${index + 1}`}>
              Older posts
            </PaginationLink>
          )}
        </PaginationWrapper>
      </StyledWrapper>
    </Layout>
  );
};
Index.propTypes = {
  pageContext: PropTypes.shape().isRequired,
};

export default Index;
