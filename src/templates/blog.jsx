import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyTutorial(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`


const Blog = (props) => {

  console.log(props)

  return (
    <Layout>
      <h1>{props.data.contentfulGatsbyTutorial.title}</h1>
      <p>{props.data.contentfulGatsbyTutorial.publishedDate}</p>
    </Layout>
  )
}

export default Blog