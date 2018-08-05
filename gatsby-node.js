const path = require('path');

const createIndexPages = (createPage, posts) => {
  const indexPageTemplate = path.resolve('src/layouts/indexPage.js');
  const paginateSize = 6;

  // Split posts into arrays of length equal to number posts on each page/paginateSize
  const groupedPages = posts
    .filter(post => post.node.frontmatter.title.length > 0 && post.node.frontmatter.layout === 'post')
    .map((node, index, arr) =>
      (index % paginateSize === 0 ? arr.slice(index, index + paginateSize) : null))
    .filter(item => item);

  // Create new indexed route for each array
  return groupedPages.forEach((group, index, groups) => {
    const pageIndex = index === 0 ? '' : `p/${index + 1}`;
    const paginationRoute = `/${pageIndex}`;
    // Avoid showing `Previous` link on first page - passed to context
    const first = index === 0;
    // Avoid showing `Next` link if this is the last page - passed to context
    const last = index === groups.length - 1;

    return createPage({
      path: paginationRoute,
      component: indexPageTemplate,
      // layout: 'index',
      context: {
        group,
        first,
        last,
        index: index + 1,
      },
    });
  });
};

const createPostPages = (createPage, posts) => {
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  return posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path || node.fields.slug,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        readNext: node.frontmatter.readNext,
      },
    });
  });
};

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   return graphql(`
//     {
//       allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
//         edges {
//           node {
//             excerpt(pruneLength: 250)
//             html
//             id
//             frontmatter {
//               title
//               date(formatString: "MMMM YYYY")
//               description
//               path
//               layout
//               author
//               category
//               readNext
//               issueNumber
//               noindex
//             }
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     const posts = result.data.allMarkdownRemark.edges;
//     createIndexPages(createPage, posts);
//     return createPostPages(createPage, posts);
//   });
// };

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                layout
                path
                readNext
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        return reject(result.errors);
      }
      createPostPages(createPage, result.data.allMarkdownRemark.edges);
      createIndexPages(createPage, result.data.allMarkdownRemark.edges);
      // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      //   createPage({
      //     path: node.frontmatter.path || node.fields.slug,
      //     component: path.resolve('./src/templates/blog-post.js'),
      //     context: {
      //       // Data passed to context is available
      //       // in page queries as GraphQL variables.
      //       slug: node.fields.slug,
      //       readNext: node.frontmatter.readNext,
      //     },
      //   });
      // });
      return resolve();
    });
  });
};
