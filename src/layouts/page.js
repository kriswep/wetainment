/* globals graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Article = styled.article`
  color: ${props => props.theme.darkShades};
  &  a {
    color: ${props => props.theme.darkAccent};
  }
`;

/* eslint-disable react/no-danger */
const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Article>
      <Helmet title={`wetainment - ${post.frontmatter.title}`} />
      <header>
        <h1>
          {post.frontmatter.title}
        </h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.frontmatter.date !== 'Invalid date' &&
        <footer>
          Published {post.frontmatter.date}
        </footer>}
    </Article>
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
        readNext
      }
    }
  }
`;
