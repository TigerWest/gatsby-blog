const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const urlSlug = require("url-slug")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
      //   trailingSlash: true,
    })
    createNodeField({
      node,
      name: `slug`,
      value: urlSlug(slug, { separator: "-" }),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: "posts/" + node.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
