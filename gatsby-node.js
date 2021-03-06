exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const mdxPostTemplate = require.resolve(`./src/templates/mdxPostTemplate.tsx`);

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