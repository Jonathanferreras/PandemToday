/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
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


  const width = props.screenwidth

  console.log('headlines')
  console.log(width)

  const headlines = [
    { id: 0, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tag: 'Coronavirus', img: '/cv19.png' },
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit2.', tag: 'Coronavirus', img: '/mnews-cv19_2.jpg' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit3.', tag: 'Coronavirus', img: '/mnews-cv19.png' }
  ]

  const renderHeadline = (headlineNum) => {
    console.log('new headline')
    console.log(headlineNum)

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
        <div className="main-card" key={headlines[headlineNum].id}>
            <div className="slide-control">
              {renderDots}
            </div>
          <div className="overlay">
            <img className="headline-pic" src={headlines[headlineNum].img} />
          </div>
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
      <h1>
        Top Headlines
      </h1>

      <div>

      </div>

      {renderHeadline(headlineNum)}

    </div>
  )
}
