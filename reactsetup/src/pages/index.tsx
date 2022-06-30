import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>homepage</title>
      </Head>

      <main>
        <h1>hello world</h1>
      </main>
    </div>
  )
}

export default Home
