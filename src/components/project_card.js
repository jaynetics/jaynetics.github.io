import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import { ProjectThumb } from "./project_images"

const ProjectCard = ({ name, link }) => (
  <Link to={link}>
    <Wrapper>
      <ProjectThumb link={link} />
      <Name>{name}</Name>
    </Wrapper>
  </Link>
)

export default ProjectCard

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

const Wrapper = styled.div`
  width: 100%;
  ${tw`relative no-underline text-white`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  img {
    ${tw`shadow-lg rounded-lg`};
    filter: brightness(70%) grayscale(16%) contrast(88%);
  }
  &:hover {
    transform: translateY(-3px);
    img {
      filter: brightness(84%) grayscale(8%) contrast(95%);
    }
  }
`

const Name = styled.div`
  ${tw`absolute text-white uppercase text-2xl md:text-3xl xl:text-4xl font-sans w-full`};
  top: 45%;
  text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.7);
`
