import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <a href="/" rel="home" className="home">
      {siteTitle}
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
