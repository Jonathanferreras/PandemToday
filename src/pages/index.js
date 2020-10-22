/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Stats from '../../components/Stats'
import Headlines from '../../components/Headlines'
import MoreNews from '../../components/MoreNews'
import Tweets from '../../components/Tweets'



import { useEffect, useState } from 'react'
import { getArticles } from '../services/news/client'



export default function Home () {
  const [articles, setArticles] = useState(null)

  // useEffect(() => {
  //   if (!articles) {
  //     getArticles()
  //       .then(data => setArticles(data.articles))
  //   }
  // })

  console.log(articles)

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
