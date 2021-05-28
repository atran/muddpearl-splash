import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mudd Pearl</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-6KWHW6S8HM`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6KWHW6S8HM', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" /> */}
        <p>coming soon</p>
        <a href="http://instagram.com/muddpearl/">
          <img src="/muddpearl_soon.jpg" />
          <h1>@muddpearl</h1>
        </a>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
