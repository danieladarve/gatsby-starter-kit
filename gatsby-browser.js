/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"
import BaseStyles from "./src/styles/baseStyles"
import Typography from "./src/styles/typography"

import { SettingsProvider } from "./src/context/settings"
import Layout from "./src/components/layout"

const wrapPageElement = ({ element, props }) => {
  const { pageContext } = props
  return (
    <>
      <Typography />
      <BaseStyles />
      <Layout pageContext={pageContext}>{element}</Layout>
    </>
  )
}

export { wrapPageElement }

const wrapRootElement = ({ element }) => (
  <SettingsProvider>{element}</SettingsProvider>
)

export { wrapRootElement }
