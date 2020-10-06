/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getArticles } from '../services/news/client'

export default function Home () {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    if (!articles) {
      getArticles()
        .then(data => setArticles(data.articles))
    }
  })

  console.log(articles)

  return (
    <div>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <span style={{ color: '#E84393' }}>Pandem</span>Today
        </h1>
      </main>
    </div>
  )
}
