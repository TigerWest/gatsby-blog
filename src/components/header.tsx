/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useMainTheme } from "../hooks/useMainTheme"

const Header = ({ siteTitle }: any) => {
  const [isDark, theme] = useMainTheme()
  return (
    <header
      css={css`
        color: inherit;
        background-color: ${theme.header.background};
        margin-bottom: 4rem;
        transition: background-color 0.5s;
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
