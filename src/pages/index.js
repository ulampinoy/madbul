import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>We are <b>craft beer</b> maker &amp; <b>homebrew</b> enthusiasts!</h2>
    <div className="madlogo" style={{ maxWidth: `240px`, margin: `.5rem auto 1.5rem` }}>
      <Image />
    </div>
    <p><span role="img" aria-labelledby="emoji-hourglass">⌛</span> Site fermentation is on-going...</p>
    <div className="contact-form">
      <h3>Want more info? Reach out!</h3>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email"  />
        <textarea name="message" placeholder="Message goes here" rows="4" />
        <button>Send message</button>
      </form>
    </div>
  </Layout>
)

export default IndexPage
