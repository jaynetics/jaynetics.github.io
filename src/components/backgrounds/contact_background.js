import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "./dividers"
import ParallaxContent from "./parallax_content"
import { UpDown, UpDownWide, waveAnimation } from "../../styles/animations"
import { colors } from "../../../tailwind"
import Glyph from "./glyph"
import SVG from "./svg"

import { ReactComponent as WaveSVG } from "../../images/wave.svg"

const ContactBackground = ({ children, offset }) => (
  <>
    <ParallaxContent speed={0.4} offset={offset}>
      {children}
    </ParallaxContent>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <Glyph
          content="}"
          hiddenMobile
          size={8}
          color={colors["green-darkest"]}
          left="66%"
          top="20%"
        />
      </UpDown>
      <UpDownWide>
        <Glyph
          content="&:"
          size={12}
          color={colors["grey"]}
          left="90%"
          top="50%"
        />
        <Glyph
          content="?"
          size={6}
          color={colors["green-lighter"]}
          left="85%"
          top="15%"
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
        content="!"
        size={12}
        color={colors["grey-darkest"]}
        left="70%"
        top="60%"
      />
      <Glyph
        content=";"
        size={8}
        color={colors["green-darkest"]}
        left="80%"
        top="70%"
      />
      <SVG
        icon="smiley"
        width={12}
        fill={colors["green-darker"]}
        left="30%"
        top="55%"
      />
    </Divider>
    <Divider fill="#03260b" speed={0.2} offset={offset}>
      <WaveContainer>
        <WaveWrapper>
          <WaveSVG />
        </WaveWrapper>
      </WaveContainer>
    </Divider>
  </>
)

export default ContactBackground

ContactBackground.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

const WaveContainer = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const WaveWrapper = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 44vh;
  }
  path {
    ${waveAnimation("24s")};
  }
`
