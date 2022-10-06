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
  const references = props.data.contentfulGatsbyTutorial.body.references
  
  let altImg = ''
  let srcImg = ''

  if(references.length > 0){
    altImg = references[0].title
    srcImg = references[0].url
  }

  // console.log('reference:', props.data.contentfulGatsbyTutorial.body.references.length)

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      {documentToReactComponents(JSON.parse(body))}
      {references.length > 0 && <img src={srcImg} alt={altImg} />}
    </Layout>
  )
}

export default Blog

