import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout
      location={location}
      siteTitle={siteTitle}
      pageTitle={post.frontmatter.title}
    >
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
        slug={post.slug}
      />
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.path} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $readNext: String = "/eclipse-for-node/"
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      slug
      excerpt(pruneLength: 160)
      body
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
    readNext: mdx(fields: { slug: { eq: $readNext } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
