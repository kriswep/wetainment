import React from 'react';
import Link from 'gatsby-link';
// import Helmet from 'react-helmet';

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div
      className="blog-posts"
      style={{
        display: 'grid',
        'grid-gap': '10px',
        'grid-template-columns': '1fr 1fr',
      }}
    >
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
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </h1>
            <h2>
              {post.frontmatter.date}
            </h2>
            <p>
              {post.excerpt}
            </p>
          </div>),
        )}
    </div>
  );
}

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
