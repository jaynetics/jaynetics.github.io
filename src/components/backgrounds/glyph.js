import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Glyph = ({ content, ...styles }) => (
  <Wrapper {...styles}>{content}</Wrapper>
)

export default Glyph

Glyph.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hiddenMobile: PropTypes.bool,
  left: PropTypes.string,
  size: PropTypes.number.isRequired,
  top: PropTypes.string,
}

const Wrapper = styled.span`
  ${tw`absolute`};
  font-size: ${props => props.size * 3}px;
  ${props => props.hiddenMobile && tw`hidden xl:block`};
  color: ${props => props.color};
  left: ${props => props.left};
  top: ${props => props.top};
`
