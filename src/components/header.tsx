import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useMainTheme } from "../hooks/useMainTheme"

const Header = ({ siteTitle }: any) => {
  const [isDark, theme] = useMainTheme()
  return (
    <header
      css={css`
        color: inherit;
        /* @media (prefers-color-scheme: dark) {
          
          color: inherit;
        } */

        ${isDark
          ? `background-color: rgba(255, 255, 255, 0.05);`
          : `background-color: rebeccapurple;`}

        margin-bottom: 4rem;
      `}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
            css={css`
              color: white;
            `}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
