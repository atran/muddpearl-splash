import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Muddpearl</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" /> */}
        <p>Coming soon</p>
        <img src="/muddpearl_soon.jpg" />
        <h1><a href="http://instagram.com/muddpearl/">@muddpearl</a></h1>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
