import React from "react"

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Inicio" />
      <h1>Inicio</h1>
      <h2>Hola, soy Luis Mario, trabajo en Grupo W.</h2>
      <p>Necesitas un programador...de desayunos?</p>
      <a href="/contact">Cont&aacute;ctame</a>
    </Layout>
  )
}

export default IndexPage
