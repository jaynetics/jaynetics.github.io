import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import HeroBackground from "../components/backgrounds/hero_background"
import styled from "styled-components"
import { ProjectImage } from "../components/project_images"

import { ReactComponent as ExternalLinkSVG } from "../images/external_link.svg"

export default ({ data: { projectsYaml: project } }) => (
  <Layout parallaxPages={1}>
    <HeroBackground offset={0}>
      <Container>
        <ImageContainer>
          <ProjectImage link={project.fields.path} />
        </ImageContainer>
        <Name>{project.name}</Name>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <LinkButton />
        </a>
        <Description>{project.desc}</Description>
      </Container>
      <Footer />
    </HeroBackground>
  </Layout>
)

export const query = graphql`
  query($path: String!) {
    projectsYaml(fields: { path: { eq: $path } }) {
      id
      name
      desc
      link
      fields {
        path
      }
    }
  }
`

const Container = styled.div`
  ${tw`w-full xl:w-2/3`};
  align-self: flex-start;
  max-height: calc(100vh - 120px);
  overflow: scroll;
  -ms-overflow-style: none; // ie
  scrollbar-width: none; // firefox 65+
  &::-webkit-scrollbar { // chrome etc.
    display: none;
  };
}
`

const Name = styled.h1`
  ${tw`text-lg md:text-2xl font-serif text-white mb-0 tracking-wide relative inline-block`};
`

const Description = styled.p`
  ${tw`text-grey-light text-sm md:text-md lg:text-lg font-sans text-justify`};
`

const LinkButton = styled(ExternalLinkSVG)`
  ${tw`relative p-2`};
  width: 2.8em;
  top: 0.8em;
  left: 0.4em;
`

const ImageContainer = styled.div`
  img {
    ${tw`shadow-lg rounded-lg`};
  }
`
