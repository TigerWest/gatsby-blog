import styled, { CreateStyled } from "@emotion/styled"
import { css, SerializedStyles } from "@emotion/core"
import emotionReset from "emotion-reset"
import facepaint from "facepaint"

export const mq = facepaint([
  "@media(min-width: 360px)",
  "@media(min-width: 540px)",
  "@media(min-width: 720px)",
  "@media(min-width: 1120px)",
])

export const theme = {
  normal: {
    colors: {
      background: "rgb(248,249,250)",
      color: "black",
    },
  },

  dark: {
    colors: {
      background: "#100e17",
      color: "white",
    },
  },
}

export type ITheme = typeof theme

/**
 * 기본 global css 설정
 */
export const globalCss = css`
  ${emotionReset}

  body {
    background-color: rgb(248, 249, 250);
    color: black;
  }
  body.dark {
    background-color: #100e17;
    color: white;
  }
  /* @media (prefers-color-scheme: dark) {
  } */

  @font-face {
    font-family: NotoSansKR;
    font-weight: 200;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Thin.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Thin.woff")}) format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 300;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Light.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Light.woff")}) format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 400;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Regular.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Regular.woff")})
        format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 350;
    src: url(${require("../fonts/NotoSans/NotoSansKR-DemiLight.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-DemiLight.woff")})
        format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 500;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Medium.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Medium.woff")}) format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 600;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Black.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Black.woff")}) format("woff");
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 700;
    src: url(${require("../fonts/NotoSans/NotoSansKR-Bold.woff2")})
        format("woff2"),
      url(${require("../fonts/NotoSans/NotoSansKR-Bold.woff")}) format("woff");
  }
  :root {
    font-size: calc(0.9rem + 0.5vw);
    line-height: 1.66;
    letter-spacing: -0.072px;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      "Apple SD Gothic Neo", NotoSansKR, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", sans-serif;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.66;
  }

  ul {
    list-style: disc;
    margin: 1em;
    margin-left: 2em;
    ul {
      list-style: circle;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
    margin-top: 1.1em;
  }
  pre,
  code {
    padding: 1em;
    margin: 1em 0;
    line-height: 1.66;
  }
  deckgo-highlight-code {
    line-height: 1.66;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  h6 {
    font-size: 1rem;
    font-weight: bold;
  }
  p {
    font-size: 1.25em;
  }

  pre {
    background-color: darkgray;
  }
`

export { css }
export default styled as CreateStyled<typeof theme>
