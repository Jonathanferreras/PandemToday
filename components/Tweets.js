import Link from 'next/link'
import Head from 'next/head'
import TweetCard from './TweetCard'


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons';

export default function Tweets(){
  return(
    <div className="tweets">
      <div className="heading">
        <h1 className="title">Tweets</h1>
      </div>
      <TweetCard className="tweet-area">
        <img className="tweet-profile-pic" src="/mnews-cv19.png" />
        <div className="tweet">
          <div className="tweet-user">
            <h7 className="twitter-username">CNN</h7>
            <h7 className="twitter-handle">@CNN</h7>
          </div>
          <p className="tweet-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dolor id sapien laoreet vulputate.
          </p>
        </div>
      </TweetCard>
    </div>
  )
}
