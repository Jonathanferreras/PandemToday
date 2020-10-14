/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import { getArticles } from '../services/news/client'
import Card from '../../components/card'

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
    <div>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1>
          Welcome to <span style={{ color: '#E84393' }}>Pandem</span>Today
        </h1>

        <Card>
          <h2 className="card-title">Cases</h2>
          <div className="stats-area">
            <div className="green-arrow-down"></div>
            <h1 className="case-numbers">34.2M</h1>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Recovered</h2>
          <div className="stats-area">
            <div className="green-arrow-up"></div>
            <h1 className="case-numbers">23.7M</h1>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Deaths</h2>
          <div className="stats-area">
            <div className= "red-arrow-up"></div>
            <h1 className="case-numbers">1.02M</h1>
          </div>
        </Card>
      </main>
    </div>
  )
}
