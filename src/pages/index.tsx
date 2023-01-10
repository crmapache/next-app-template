import Head from 'next/head'

import { HomePage, MainLayout } from '@components/features'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}
