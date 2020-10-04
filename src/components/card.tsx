import { css } from "@emotion/core"
import * as React from "react"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import { Link } from "gatsby"
import dayjs from "dayjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { useMainTheme } from "../hooks/useMainTheme"

interface ICardProps {
  img?: FixedObject | any
  title: string
  excerpt: string
  timeToRead: number | string
  createdAt: Date
  slug: string
}

const Card: React.FunctionComponent<ICardProps> = ({
  img,
  slug,
  title,
  excerpt,
  createdAt,
  timeToRead,
}) => {
  const [isDark, theme] = useMainTheme()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${isDark ? `rgba(255, 255, 255, 0.12)` : `white`};
        height: 100%;
      `}
    >
      {img && (
        <div>
          <Link to={`/posts/${slug}`}>
            <Img fluid={{ ...img }} style={{ height: "7em" }} />
          </Link>
        </div>
      )}
      <Link
        css={css`
          text-decoration: none;
          color: ${theme.colors.color};
          height: 100%;
          display: inline-block;
        `}
        to={`/posts/${slug}`}
      >
        <div
          css={css`
            padding: 1.2em;
            font-size: 14px;
          `}
        >
          <h4
            css={css`
              margin-top: 0;
            `}
          >
            {title}
          </h4>
          <p>{excerpt}</p>
        </div>
      </Link>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 1.2em;
          font-size: 0.8em;
          color: gray;
        `}
      >
        <time>{dayjs(createdAt).format("YYYY-MM-DD")}</time>
        <span
          css={css`
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          `}
        >
          <FontAwesomeIcon
            size={"sm"}
            icon={faClock}
            style={{ marginRight: "5px" }}
          />{" "}
          {timeToRead}
          <small
            css={css`
              font-size: 0.8em;
            `}
          >
            m
          </small>
        </span>
      </div>
    </div>
  )
}

export default Card
