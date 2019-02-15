import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import HeroBackground from "../components/backgrounds/hero_background"

import { WidthLimiterXl } from "../components/width_limiters"
import { BigTitle, Subtitle } from "../components/titles"

export default () => (
  <Layout parallaxPages={1}>
    <HeroBackground offset={0}>
      <WidthLimiterXl>
        <BigTitle>Seems we have a 404 here.</BigTitle>
        <Subtitle>
          <Link to={"/"}>Back to home</Link>
        </Subtitle>
      </WidthLimiterXl>
      <Footer />
    </HeroBackground>
  </Layout>
)
