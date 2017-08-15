import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <article className="blog-post-container">
      <Helmet title={`wetainment - ${post.frontmatter.title}`} />
      <header className="blog-post">
        <h1>
          {post.frontmatter.title}
        </h1>
      </header>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
