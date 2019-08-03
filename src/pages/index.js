import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>We are <b>craft beer</b> maker and <b>homebrew</b> enthusiasts!</h2>
    <p>⌛ Site fermentation is on-going...</p>
    <div className="madlogo" style={{ maxWidth: `200px`, margin: `.5rem auto 1.5rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
