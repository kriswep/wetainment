import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--blog-list-margin) * -1);
`;
const Card = styled.article`
  flex-grow: 1;
  flex-basis: 22rem;
  margin: var(--blog-list-margin);
  h3 {
    margin: var(--blog-list-header-margin);
    font-size: 2.25rem;
  }
  h3 > a {
    box-shadow: none;
  }
  section > p {
    font-size: 1.125rem;
  }
  section > p:last-child {
    margin-bottom: 0;
  }
  header > div {
    display: flex;
    font-size: 1.125rem;
  }
  header small {
    font-size: 1.125rem;
  }
  header strong {
    margin-left: 1.25rem;
    text-transform: uppercase;
    color: var(--main-accent-color);
  }
`;

const Pagination = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--blog-list-margin) * 2);
  & > .older-1 {
    margin-left: auto;
  }
`;

const BlogList = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;

  return (
    <Layout
      location={location}
      siteTitle={siteTitle}
      pageTitle="Explore modern frontend technologies"
      pageSubTitle="Read about JavaScript, Typescript, React, React Native, GraphQL and more"
    >
      <SEO title="Modern frontend development" />
      <CardWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Card key={node.fields.slug}>
              <header>
                <div>
                  <small>{node.frontmatter.date}</small>
                  <strong>{node.frontmatter.category}</strong>
                </div>
                <h3>
                  <Link to={node.frontmatter.path}>{title}</Link>
                </h3>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </Card>
          );
        })}
      </CardWrapper>
      <Pagination>
        {currentPage === 2 && (
          <Link to={`/`} className={`newer-${currentPage}`}>
            Newer
          </Link>
        )}
        {currentPage > 2 && (
          <Link to={`/p/${currentPage - 1}`} className={`newer-${currentPage}`}>
            Newer
          </Link>
        )}
        {currentPage < numPages && (
          <Link to={`/p/${currentPage + 1}`} className={`older-${currentPage}`}>
            Older
          </Link>
        )}
      </Pagination>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            description
            path
            layout
            author
            category
            readNext
            issueNumber
            # noindex
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
