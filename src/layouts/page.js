/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

/* eslint-disable react/no-danger */
const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <article>
      <Helmet title={`wetainment - ${post.frontmatter.title}`} />
      <header>
        <h1>
          {post.frontmatter.title}
        </h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};
/* eslint-enable react/no-danger */

Template.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Template;

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
