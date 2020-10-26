/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/Layout'
import Stats from '../components/Stats'
import Headlines from '../components/Headlines'
import MoreNews from '../components/MoreNews'
import Tweets from '../components/Tweets'

export default function Home () {
  return (
    <Layout>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content">
        <div className="main-area">
          <Stats />
          <Headlines />
          <MoreNews />
        </div>
        <Tweets />
      </main>
    </Layout>
  )
}
