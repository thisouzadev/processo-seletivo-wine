import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <nav>
        <Link href="/about/">
          <a data-cy="nav-item">About</a>
        </Link>
      </nav>
      <main>
        <h1>hello world</h1>
      </main>
    </Container>
  )
}

export default Home
