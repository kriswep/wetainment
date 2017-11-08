const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode, basePath: 'pages' });
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     });
//   }
// };

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/layouts/page.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              description
              author
              readNext
              issueNumber
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          readNext: node.frontmatter.readNext,
        }, // additional data can be passed via context
      });
    });
  });
};
