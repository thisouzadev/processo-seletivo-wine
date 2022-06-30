import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import WineList from '../components/WineList'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>homepage</title>
      </Head>

      <main>
        <WineList />
      </main>
    </div>
  )
}

export default Home
