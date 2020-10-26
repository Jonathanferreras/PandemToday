/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'

export default function MoreNews () {
  const news_articles = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' }
  ]

  const renderMoreNews = news_articles.map((article, article_num) => {
    return (
      <div className="more-news-item" key={article_num}>
        <img className="more-news-item-img" src={`${article.news_img}`}/>
        <div className="more-news-item-story">
          <p >{article.title}</p>
        </div>
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
        {renderMoreNews}
      </div>
    </div>
  )
}
