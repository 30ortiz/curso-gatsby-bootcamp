import React from 'react';
import { Helmet } from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query {	
      site {
        siteMetadata {
          title
          description
          author
          }
        }
      }
  `)


  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content="React App" />
    </Helmet>
  );
}

export default Head;