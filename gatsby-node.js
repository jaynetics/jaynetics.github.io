const { createFilePath } = require(`gatsby-source-filesystem`)
const pathHelper = require(`path`)

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({
    name: "babel-plugin-tailwind-components",
    options: {
      config: "./tailwind.js",
      format: "auto",
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (/Yaml/.test(node.internal.type)) {
    actions.createNodeField({
      node,
      name: `path`,
      value: createFilePath({ node, getNode, trailingSlash: false }),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allProjectsYaml {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allProjectsYaml.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.fields.path,
        component: pathHelper.resolve(`./src/templates/project.js`),
      })
    })
  })
}
