import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome to MadBul!</h2>
    <p>Currently brewing the site...</p>
    <div style={{ maxWidth: `240px`, margin: `1.45rem auto` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
