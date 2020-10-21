import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons';


export default function MoreNews(){
  return(
    <div className="more-news">
      <div className="heading">
        <h1 className="title">More News</h1>
        <h5 className="see-more">See More</h5>
      </div>

      <div className="more-news-card">
        <div className="more-news-item">
          <img className="more-news-item-img" src="/mnews-cv19.png"/>
          <p className="more-news-item-story">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="more-news-item">
          <img className="more-news-item-img" src="/mnews-cv19.png"/>
          <p className="more-news-item-story">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="more-news-item">
          <img className="more-news-item-img" src="/mnews-cv19.png"/>
          <p className="more-news-item-story">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="more-news-item">
          <img className="more-news-item-img" src="/mnews-cv19.png"/>
          <p className="more-news-item-story">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}
