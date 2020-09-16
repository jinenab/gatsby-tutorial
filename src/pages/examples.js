import React from "react"
import Header from "../examples/Header"
import Layout from "../components/layout"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"
const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <HeaderStatic />
      <h5>author:{author}</h5>
    </Layout>
  )
}
export const data = graphql`
  query myQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
export default examples
