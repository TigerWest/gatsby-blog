import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { Box, Flex } from "@rebass/grid/emotion"
import { css, mq } from "../components/styled"

export default function PostList({ data }: any) {
  const posts = data.allMdx
  console.log(posts)
  return (
    <Layout>
      <SEO title={"Beom/TigerWest"} description="Beom의 블로그입니다." />
      <Flex alignItems="stretch" justifyContent="stretch" flexWrap="wrap">
        {posts?.nodes?.map(v => (
          <Box
            key={v.slug}
            // width={}
            css={css(
              mq({
                width: [
                  `${(100 * 1) / 1}%`,
                  `${(100 * 1) / 1}%`,
                  `${(100 * 1) / 2}%`,
                  `${(100 * 1) / 2}%`,
                  `${(100 * 1) / 3}%`,
                ],
                padding: ["0.5em", "0.7em"],
              })
            )}
            padding={"0.5em"}
            style={{ alignItems: "stretch" }}
          >
            <Card
              title={v.frontmatter?.title}
              slug={v.fields?.slug}
              excerpt={v.excerpt}
              createdAt={v.frontmatter.createdAt}
              timeToRead={v.timeToRead}
              img={v?.frontmatter?.image?.childImageSharp?.fixed}
            />
          </Box>
        ))}
      </Flex>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx {
      totalCount

      nodes {
        frontmatter {
          title
          createdAt
          image {
            childImageSharp {
              fixed {
                width
                height
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
        excerpt
        slug
        timeToRead
        fields {
          slug
        }
      }
    }
  }
`
