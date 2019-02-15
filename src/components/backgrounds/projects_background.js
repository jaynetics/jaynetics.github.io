import React from "react"
import PropTypes from "prop-types"
import { Divider, DividerMiddle } from "./dividers"
import ParallaxContent from "./parallax_content"
import { UpDown, UpDownWide } from "../../styles/animations"
import { colors } from "../../../tailwind"
import Glyph from "./glyph"
import SVG from "./svg"

const ProjectsBackground = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, #001000 0%, #002600 100%)"
      speed={-0.2}
      offset={Number.parseFloat(`${offset}.1`)}
      factor={2}
    />
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <Glyph
          content="{"
          size={8}
          color={colors["green-lighter"]}
          left="25%"
          top="5%"
        />
        <Glyph
          content=";"
          hiddenMobile
          size={24}
          color={colors["green-lighter"]}
          left="17%"
          top="60%"
        />
        <SVG
          icon="smiley"
          width={6}
          fill={colors["grey-dark"]}
          left="85%"
          top="75%"
        />
      </UpDown>
      <UpDownWide>
        <Glyph
          content="{"
          hiddenMobile
          size={16}
          color={colors.green}
          left="20%"
          top="90%"
        />
        <Glyph
          content=";"
          size={12}
          color={colors["green-dark"]}
          left="90%"
          top="30%"
        />
        <Glyph
          content="</>"
          size={16}
          color={colors["grey-dark"]}
          left="70%"
          top="90%"
        />
        <Glyph
          content=";"
          hiddenMobile
          size={16}
          color={colors.green}
          left="18%"
          top="75%"
        />
        <Glyph
          content="&:"
          size={6}
          color={colors["grey-dark"]}
          left="75%"
          top="10%"
        />
        <Glyph
          content="=>"
          hiddenMobile
          size={8}
          color={colors["green-darker"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Glyph
        content="{}"
        size={6}
        color={colors["green-lighter"]}
        left="4%"
        top="20%"
      />
      <Glyph
        content="!"
        size={12}
        color={colors["green-darker"]}
        left="80%"
        top="60%"
      />
      <Glyph content="->" size={16} color={colors.grey} left="75%" top="30%" />
      <Glyph
        content="</>"
        size={8}
        color={colors["green-lighter"]}
        left="80%"
        top="70%"
      />
      <SVG
        icon="smiley"
        width={6}
        fill={colors["green-darker"]}
        left="10%"
        top="10%"
      />
      <SVG
        icon="smiley"
        width={12}
        fill={colors["grey-darker"]}
        left="29%"
        top="26%"
      />
    </Divider>
    <ParallaxContent
      speed={0.4}
      offset={Number.parseFloat(`${offset}.2`)}
      factor={2}
    >
      {children}
    </ParallaxContent>
  </>
)

export default ProjectsBackground

ProjectsBackground.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
