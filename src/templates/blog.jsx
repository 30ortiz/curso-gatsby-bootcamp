import React from 'react'
import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyTutorial(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        raw,
        references{
          title 
          url
        }
      }
    }
  }
`

const Blog = (props) => {
  const title = props.data.contentfulGatsbyTutorial.title
  const date = props.data.contentfulGatsbyTutorial.publishedDate
  const body = props.data.contentfulGatsbyTutorial.body.raw
  const altImg = props.data.contentfulGatsbyTutorial.body.references[0].title
  const srcImg = props.data.contentfulGatsbyTutorial.body.references[0].url
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      {documentToReactComponents(JSON.parse(body))}
      <img alt={altImg} src={srcImg} />
    </Layout>
  )
}

export default Blog

