/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Headlines.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'

export default function Headlines (props) {
  const [headlineNum, setheadlineNum] = useState(0)
  const [activeDot, setActiveDot] = useState(0)
  const [data, setData] = useState(null)
  const [dataLoading, setDataLoading] = useState(false)

  const width = props.screenwidth

  // console.log('headlines')
  // console.log(width)

  const headlines = [
    { id: 0, title: 'Biden COVID-19 adviser suggests potential lockdown lasting over a month', tag: 'Coronavirus', author: 'Fox News', img: '/cv19.png', urlToImage: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/11/0/0/Michael-Osterholm-GETTY.jpg?ve=1&tl=1', url: 'https://www.foxbusiness.com/economy/biden-covid-19-adviser-lockdown' },
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.', tag: 'Coronavirus', img: '/mnews-cv19_2.jpg' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.', tag: 'Coronavirus', img: '/mnews-cv19.png' }
  ]

  const getHeadlineArticles = async () => {
    const result = await axios(
      'http://localhost:3000/api/news/headlines'
    )

    console.log(result)

    // let articles = []

    const headline_articles = result.data.articles.slice(0, 3)

    setData(headline_articles)
    setDataLoading(true)
  }

  useEffect(() => {
    getHeadlineArticles()
  }, [])

  const cycleHeadlines = () => {
    if (headlineNum >= headlines.length - 1) {
      setheadlineNum(0)
      setActiveDot(0)
    } else {
      setheadlineNum(headlineNum => headlineNum + 1)
      setActiveDot(activeDot => activeDot + 1)
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(cycleHeadlines, 5000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [headlineNum])

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

  const renderHeadlineCard = () => {
    return (
      <div className="main-card box" key={headlines[headlineNum].id}>
        <Link href={headlines[headlineNum].url ? headlines[headlineNum].url : '/'}>
          <a className=''>
            <div className="slide-control">
              {renderDots}
            </div>
            <div className="overlay">
              <img className="headline-pic" src={data ? data[headlineNum].urlToImage : headlines[headlineNum].urlToImage} />
            </div>
            <div className="headline-card">
              <div className="headline-tag"> {headlines[headlineNum].tag}</div>
              <div className="headline-news">
                {headlines[headlineNum].title}

              </div>
              <div className="social-stats">
                <b className="pink">Source:  </b> {headlines[headlineNum].author}

              </div>
            </div>
          </a></Link>
      </div>
    )
  }

  const renderHeadline = (headlineNum) => {
    // console.log('new headline')
    // console.log(headlineNum)

    if (width <= 414) {
      return (
        <div className="main-card" key={headlines[headlineNum].id}>
          <img className="headline-pic" src={headlines[headlineNum].img} />
          <div className="headline-card">
            <div className="headline-tag"> {headlines[headlineNum].tag}</div>
            <div className="headline-news">
              {headlines[headlineNum].title}
            </div>
            <div className="social-stats">
              <FontAwesomeIcon icon={faEye} className="social-stats-icons" />
              <h7 className="social-stat-numbers">1.5k</h7>
              <FontAwesomeIcon icon={faShareSquare} className="social-stats-icons" />
              <h7 className="social-stat-numbers">200</h7>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <React.Fragment>
          {dataLoading ? renderHeadlineCard() : loadingAnimation()}

        </React.Fragment>

      )
    }
  }

  const handleHeadlineDisplayed = (articleNum) => {
    console.log('clicked headline')
    console.log(articleNum)
    setActiveDot(articleNum)
    setheadlineNum(articleNum)
  }

  const renderDots = headlines.map((headline, i) => {
    const articleNum = i
    const sliderDotClass = 'slide-control-dot '

    return (
      <div className={activeDot === articleNum ? sliderDotClass + 'slide-control-dot-active' : sliderDotClass + 'slide-control-dot-inactive'} key={articleNum} onClick={(i) => handleHeadlineDisplayed(articleNum)}> </div>
    )
  })

  return (
    <div className="headlines">
      <h1 className="title">
        Top Headlines
      </h1>

      <div>

      </div>

      {renderHeadline(headlineNum)}

    </div>
  )
}
