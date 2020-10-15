/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../../components/Layout'
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
    <Layout>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="content">


        <div className="stats">
          <h1>
            Stats
          </h1>
          <div className="filter">
            <h4 className="stats-filter">Global</h4>
            <h5 className="see-more">See More</h5>
          </div>


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
        </div>


      </main>
    </Layout>
  )
}
