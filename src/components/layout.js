import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSettings } from "../context/settings"

import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { darkMode } = useSettings()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`outer ${darkMode ? "dark" : "light"}`}>
      <Header
        siteTitle={
          data.site.siteMetadata ? data.site.siteMetadata.title : `Title`
        }
      />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
