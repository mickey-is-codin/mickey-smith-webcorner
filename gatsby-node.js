exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // const mdPostTemplate = require.resolve(`./src/templates/mdPostTemplate.tsx`);
  const mdxPostTemplate = require.resolve(`./src/templates/mdxPostTemplate.tsx`);
  // const result = await graphql(`
  //   {
  //     allMdx {
  //       edges {
  //         node {
  //           frontmatter {
  //             date
  //             slug
  //             title
  //           }
  //         }
  //       }
  //     }
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: mdPostTemplate,
  //     context: {
  //       slug: node.frontmatter.slug,
  //     },
  //   });
  // });
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: mdxPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};