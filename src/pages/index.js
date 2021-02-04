import React from "react"
import SEO from "../components/seo"
import Block from "../components/block"
import Home from "../components/content/home"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Block id="teaching" color="blue">
      <Home />
    </Block>
  </>
)

export default IndexPage
