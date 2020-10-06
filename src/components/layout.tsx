/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"

import Header from "./header"
import "./layout.css"
import { DarkModeContextProvider } from "../hooks/useDark"
import { theme, globalCss } from "./styled"
import { css, Global } from "@emotion/core"

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
    <ThemeProvider theme={theme}>
      <DarkModeContextProvider>
        <Global styles={globalCss} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "1080px",
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main
            css={css`
              min-height: 100vh;
            `}
          >
            {children}
          </main>
          <footer
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              height: 5em;
            `}
          >
            © {new Date().getFullYear()} TigerWest, Built with
            <a
              css={css`
                color: inherit;
                margin-left: 5px;
              `}
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
          </footer>
        </div>
      </DarkModeContextProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
