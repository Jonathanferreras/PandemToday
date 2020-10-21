import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons';


export default function Headlines(){
  const headlines = [
    {news_headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', headline_tag:'Coronavirus', headline_img: '/mnews-cv19.png'}
  ]

  return(
    <div className="headlines">
      <h1>
        Headlines
      </h1>

      <div className="main-card">
        <img className="headline-pic" src="/cv19.png" />
        <div className="headline-card">
          <div className="headline-tag"> Coronavirus </div>
          <div className="headline-news">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula lobortis enim, vitae lacinia lacus fringilla non.
          </div>
          <div className="social-stats">
            <FontAwesomeIcon icon={faEye} className="social-stats-icons" />
            <h7 className="social-stat-numbers">1.5k</h7>
            <FontAwesomeIcon icon={faShareSquare} className="social-stats-icons" />
            <h7 className="social-stat-numbers">200</h7>
          </div>
        </div>
      </div>
    </div>
  )
}
