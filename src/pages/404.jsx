import React from "react"

import Layout from "../components/layout";
import Head from "../components/head";

const NotFoundPage = () =>{
    return (
        <Layout>
            <Head title={"Not Found Page"} />
            <h1>Page not found</h1>
            <p><a href="/">home</a></p>
        </Layout>
    )
}
  
export default NotFoundPage