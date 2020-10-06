import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function BlogPost({ data }: any) {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
