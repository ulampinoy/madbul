/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./home.scss"

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 480,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          textAlign: `center`,
        }}
      >
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()} MadBul — Homebrewed Craft Beers
          </p>
          <p>
            Follow us in <a href="https://www.instagram.com/madbul.ph/">Instagram</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
