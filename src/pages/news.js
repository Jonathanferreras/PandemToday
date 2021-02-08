/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import 'intersection-observer'
import styles from './news.module.css'
import Layout from '../components/Layout'
import Card from '../components/Card/Card'

import { getArticlesByPage } from '../services/news/client'

export default function News (props) {
  const [data, setData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [lastElem, setLastElem] = useState(false)
  // const observer = useRef(new IntersectionObserver((entries) => {

  // }, {threshold: 1}))
  // const [element, setElement] = useState(null)

  const news_articles = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', news_img: '/mnews-cv19.png' }
  ]

  // let options = {
  //   root: document.querySelector('.news-item'),
  //   threshold: 0.05
  // }

  useEffect(() => {
    const lastNewsItem = document.querySelector('div.footer')

    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(handleIntersecting, options)

    observer.observe(lastNewsItem)

    return () => {
      observer.unobserve(lastNewsItem)
      setDataLoading(true)
    }
  }, [pageNumber])

  function handleIntersecting(entries){
    const last = entries[0];
        if (last.isIntersecting) {
          // console.log(entries[0])
          // console.log('active intersection')
          setPageNumber(pageNumber => (pageNumber + 1))
          retrieveMoreArticles()
        }
  }

  const retrieveArticles = (page_number) => {
    getArticlesByPage(page_number)
      .then(d => {
        setData(d.articles)
        setDataLoading(true)
        console.log(d)
      })
  }

  const retrieveMoreArticles = () => {
    getArticlesByPage(pageNumber)
      .then(d => {
        setData(data => data.concat(d.articles))
        setDataLoading(true)
        console.log(d)
      })
  }

  useEffect(() => {
    const page_number = 1
    retrieveArticles(page_number)
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
      <Card type="news" className="news-item" key={article_num}>
        <Link href={article.url}>
          <a>
            <img className="news-item-img" src={article.urlToImage} />
            <div className="news-item-story">
              <p>{article.title}</p>
            </div>
          </a>
        </Link>
      </Card>
    )
  })

  return (
    <Layout>
      <div className="news-card-area">
        {dataLoading ? renderNews : loadingAnimation()}
      </div>
    </Layout>
  )
}
