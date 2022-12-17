import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../medium/components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
      </Head>

    
    <Header />
    </div>
  )
}

export default Home
