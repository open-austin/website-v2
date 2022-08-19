import Head from 'next/head'
import { ReactElement } from 'react'
import Footer from '../footer'
import Header from '../header'

export const DefaultLayout = ({
  children,
}: {
  children: ReactElement | string
}) => {
  return (
    <>
      <Head>
        <title>Open Austin</title>
        <meta name="description" content="Open Austin -- FILL ME IN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
