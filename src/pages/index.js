import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --margin: 2rem;
  margin: calc(var(--margin) * -1);
`;
const Card = styled.article`
  flex-grow: 1;
  flex-basis: 22rem;
  margin: var(--margin);
  h3 {
    margin: 0 0 2rem 0;
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

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

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
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
