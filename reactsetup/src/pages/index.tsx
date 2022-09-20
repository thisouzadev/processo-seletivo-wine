import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Loja from './loja'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Wine Thiago</title>
        </Head>
        <Menu />
      </div>
      <Header />
      <main>
        <Loja />
      </main>
    </div>
  )
}

export default Home
