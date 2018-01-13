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
  groupedPages.forEach((group, index, groups) => {
    const pageIndex = index === 0 ? '' : `p/${index + 1}`;
    const paginationRoute = `/${pageIndex}`;
    // Avoid showing `Previous` link on first page - passed to context
    const first = index === 0;
    // Avoid showing `Next` link if this is the last page - passed to context
    const last = index === groups.length - 1;

    return createPage({
      path: paginationRoute,
      component: indexPageTemplate,
      layout: 'index',
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
  const blogPostTemplate = path.resolve('src/layouts/page.js');

  return posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      layout: 'postPage',
      context: {
        readNext: node.frontmatter.readNext,
      }, // additional data can be passed via context
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
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
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    createIndexPages(createPage, posts);
    return createPostPages(createPage, posts);
  });
};
