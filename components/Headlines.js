import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons';


export default function Headlines(){
  const headlines = [
    {id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tag:'Coronavirus', img: '/cv19.png'}
  ]

  const renderHeadline = headlines.map((headline) => {
    return(
      <div className="main-card" key={headline.id}>
        <img className="headline-pic" src={`${headline.img}`} />
        <div className="headline-card">
          <div className="headline-tag"> {headline.tag} </div>
          <div className="headline-news">
            {headline.title}
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
    })

  return(
    <div className="headlines">
      <h1>
        Top Headlines
      </h1>

      {renderHeadline}

    </div>
  )
}
