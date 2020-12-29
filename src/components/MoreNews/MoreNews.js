/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './MoreNews.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'

import { getArticlesForLandingPage } from '../../services/news/client'

export default function MoreNews () {
  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const news_articles = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' }
  ]

  useEffect(() => {
    getArticlesForLandingPage()
      .then(d => {
        setData(d.articles)
        setDataLoading(true)
      })
  }, [])

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

  const renderMoreNews = data.map((article, article_num) => {
    console.log(data)
    return (
      <div className="more-news-item" key={article_num}>
        <img className="more-news-item-img" src={article.urlToImage} />
        <div className="more-news-item-story">
          <p >{article.title}</p>
        </div>
        <hr className="more-item-divider" />
      </div>
    )
  })

  return (
    <div className="more-news">
      <div className="heading">
        <h1 className="title">More News</h1>
        <h5 className="see-more">See More</h5>
      </div>

      <div className="more-news-card">
        {dataLoading ? renderMoreNews : loadingAnimation()}
      </div>
    </div>
  )
}
