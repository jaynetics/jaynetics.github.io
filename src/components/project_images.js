import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// These classes render Img elements, using jpg files with the same
// base path as the page/link.
// Doing this by getting all images and filtering them is not ideal,
// but a better solution is upcoming:
// https://github.com/gatsbyjs/gatsby/issues/10482

export const ProjectThumb = ({ link }) => (
  <ImageForLink link={link} type="thumb" />
)

export const ProjectImage = ({ link }) => (
  <ImageForLink link={link} type="large" />
)

const ImageForLink = ({ link, type }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { relativePath: { regex: "/projects/.*jpg/" } }
        ) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                thumb: fluid(maxWidth: 592, maxHeight: 273) {
                  ...GatsbyImageSharpFluid
                }
                large: fluid(maxWidth: 1000, maxHeight: 460, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => <Img fluid={findImage({ images, link, type })} />}
  />
)

const findImage = ({ images, link, type }) => {
  const { node } = images.edges.find(
    ({ node }) => `/${node.relativePath}` === `${link}.jpg`
  )
  return node.childImageSharp[type]
}
