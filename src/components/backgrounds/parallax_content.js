import styled from "styled-components"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const ParallaxContent = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`

export default ParallaxContent
