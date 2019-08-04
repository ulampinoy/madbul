import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>We are <b>craft beer</b> maker and <b>homebrew</b> enthusiasts!</h2>
    <p><span role="img" aria-labelledby="emoji-hourglass">⌛</span> Site fermentation is on-going...</p>
    <div className="madlogo" style={{ maxWidth: `180px`, margin: `.5rem auto 1.5rem` }}>
      <Image />
    </div>
    <div className="contact-form">
      <h3>Want more info? Reach out!</h3>
      <form
        name="contact"
        method="POST"
        netlify
      >
        <input name="name" placeholder="Your name" type="text" />
        <input name="email" placeholder="Your email" type="email" />
        <textarea name="message" placeholder="Message goes here" rows="4" />
        <button>Send message</button>
      </form>
    </div>
  </Layout>
)

export default IndexPage
