import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import ProjectCard from "../components/project_card"
import { Title, BigTitle, Subtitle } from "../components/titles"
import { WidthLimiterXl, WidthLimiterXxl } from "../components/width_limiters"
import HeroBackground from "../components/backgrounds/hero_background"
import ProjectsBackground from "../components/backgrounds/projects_background"
import ContactBackground from "../components/backgrounds/contact_background"

import avatarURL from "../images/avatar.jpg"

const Index = ({ data }) => (
  <Layout parallaxPages={4}>
    <HeroBackground offset={0}>
      <WidthLimiterXl>
        <BigTitle>
          Hi, <br /> I'm Janosch.
        </BigTitle>
        <Subtitle>I'm a software developer.</Subtitle>
      </WidthLimiterXl>
    </HeroBackground>

    <ProjectsBackground offset={1}>
      <WidthLimiterXxl>
        <Title>Stuff I've worked on</Title>
        <ProjectsWrapper>
          {data.allProjectsYaml.edges.map(({ node }) => (
            <ProjectCard
              key={node.id}
              name={node.name}
              link={node.fields.path}
            />
          ))}
        </ProjectsWrapper>
      </WidthLimiterXxl>
    </ProjectsBackground>

    <ContactBackground offset={3}>
      <WidthLimiterXxl>
        <Title>Get in touch</Title>
        <ContactWrapper>
          <Avatar src={avatarURL} alt="Janosch Müller" />
          <ContactSub>
            Say <a href="mailto:hi@janosch.online">hi!</a>
          </ContactSub>
        </ContactWrapper>
      </WidthLimiterXxl>
      <Footer />
    </ContactBackground>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    allProjectsYaml(sort: { fields: [rank], order: ASC }) {
      edges {
        node {
          id
          name
          fields {
            path
          }
        }
      }
    }
  }
`

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const ContactWrapper = styled.div`
  ${tw`pb-24`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const ContactSub = styled.div`
  ${tw`text-grey-light font-sans pt-12 text-2xl lg:text-3xl xl:text-4xl`};
`
