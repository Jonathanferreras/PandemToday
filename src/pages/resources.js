/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './news.module.css'
import Layout from '../components/Layout'
import Card from '../components/Card/Card'

import { getArticlesByPage } from '../services/news/client'

export default function News (props) {
  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)

  const news_articles = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' }
  ]

  useEffect(() => {
    getArticlesByPage(pageNumber)
      .then(d => {
        setData(d.articles)
        setDataLoading(true)
        console.log(d)
      })
  }, [pageNumber])

  const loadingAnimation = () => {
    return (
      <div className="loading bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }

  const renderNews = data.map((article, article_num) => {
    return (
      <Card className="news-item" key={article_num}>
        <Link href={article.url}>
          <a>
            <img className="news-item-img" src={article.urlToImage} />
            <div className="news-item-story">
              <p >{article.title}</p>
            </div>
          </a>
        </Link>
      </Card>
    )
  })

  return (
    <Layout>
      <div className="resources-area">
        <h1>Get to Know your Resources</h1>
        <p>Here is a place resources for </p>
      </div>
    </Layout>
  )
}
