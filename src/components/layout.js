import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import GlobalStyle from "../styles/global"
import SEO from "./seo"
import "typeface-cantata-one"
import "typeface-open-sans"

const Layout = ({ children, parallaxPages }) => (
  <>
    <SEO />
    <GlobalStyle />
    <Parallax pages={parallaxPages} children={children} />
  </>
)

export default Layout
