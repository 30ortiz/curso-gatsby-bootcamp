import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";



const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <h2>Hi, I'm Luis Mario, I work at W group.</h2>
      <Link to="/contact">Contáctame</Link>
    </Layout>
  );
}

export default AboutPage;