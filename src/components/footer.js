import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const Footer = () => (
  <FooterContainer>
    <b>Privacy:</b> This site uses no cookies, trackers, or third-party CDNs.
    <br />
    <b>Legals:</b> Janosch Müller • Tempelhofer Ufer 35a, 10963 Berlin, Germany
    • +4915780371671 • j.m.gnoerg@dfgh.net
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-xs`};
`
