import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: "grid",
      }}
    >
      <p>
        <strong>{author}</strong> is programmer based in chinatown, nyc{" "}
      </p>
      <p>
        <a
          href={`https://twitter.com/${social.twitter}`}
          style={{ marginRight: rhythm(2 / 2) }}
        >
          pseuyi
        </a>
        <a href={`https://github.com/${social.github}`}>github</a>
      </p>
   </div>
  )
}

export default Bio
