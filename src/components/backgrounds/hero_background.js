import React from "react"
import PropTypes from "prop-types"
import { colors } from "../../../tailwind"
import { Divider } from "./dividers"
import ParallaxContent from "./parallax_content"
import { UpDown, UpDownWide } from "../../styles/animations"
import Glyph from "./glyph"
import SVG from "./svg"

const HeroBackground = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <Glyph
          content="{"
          size={48}
          color={colors["green-darker"]}
          left="10%"
          top="20%"
        />
        <Glyph
          content=";"
          size={48}
          color={colors["green-darker"]}
          left="60%"
          top="70%"
        />
        <SVG
          icon="smiley"
          width={6}
          fill={colors["grey-darker"]}
          left="60%"
          top="15%"
        />
      </UpDown>
      <UpDownWide>
        <Glyph
          content="~"
          hiddenMobile
          size={16}
          color={colors["green-dark"]}
          left="80%"
          top="10%"
        />
        <Glyph
          content="}"
          hiddenMobile
          size={12}
          color={colors["green-lighter"]}
          left="90%"
          top="50%"
        />
        <Glyph
          content="["
          hiddenMobile
          size={16}
          color={colors["grey-darker"]}
          left="70%"
          top="90%"
        />
        <Glyph
          content="{"
          hiddenMobile
          size={16}
          color={colors["green-darkest"]}
          left="30%"
          top="65%"
        />
        <Glyph
          content="{}"
          hiddenMobile
          size={8}
          color={colors["grey-darker"]}
          left="75%"
          top="10%"
        />
        <Glyph
          content=";"
          hiddenMobile
          size={8}
          color={colors["grey-darkest"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Glyph
        content="["
        hiddenMobile
        size={24}
        color={colors["grey-darker"]}
        left="5%"
        top="70%"
      />
      <Glyph
        content="<"
        size={6}
        color={colors["grey-darkest"]}
        left="4%"
        top="20%"
      />
      <Glyph
        content=";"
        size={12}
        color={colors["grey-darkest"]}
        left="50%"
        top="60%"
      />
      <Glyph
        content=">"
        size={8}
        color={colors["grey-darkest"]}
        left="95%"
        top="90%"
      />
      <Glyph
        content="</>"
        hiddenMobile
        size={24}
        color={colors["grey-darker"]}
        left="40%"
        top="80%"
      />
      <Glyph
        content="{"
        size={8}
        color={colors["grey-darker"]}
        left="25%"
        top="5%"
      />
      <Glyph content="]" size={64} color={colors.green} left="90%" top="5%" />
      <Glyph
        content="}"
        size={16}
        color={colors["grey-darker"]}
        left="10%"
        top="50%"
      />
      <Glyph
        content="}"
        size={8}
        color={colors["grey-darker"]}
        left="80%"
        top="70%"
      />
      <SVG
        icon="smiley"
        hiddenMobile
        width={64}
        fill={colors["green-dark"]}
        left="5%"
        top="90%"
      />
      <SVG
        icon="smiley"
        width={6}
        fill={colors["grey-darkest"]}
        left="10%"
        top="10%"
      />
      <SVG
        icon="smiley"
        width={12}
        fill={colors["grey-darkest"]}
        left="40%"
        top="30%"
      />
    </Divider>
    <ParallaxContent speed={0.4} offset={offset}>
      {children}
    </ParallaxContent>
  </>
)

export default HeroBackground

HeroBackground.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
