import Link from 'next/link'
import Head from 'next/head'
import TweetCard from './TweetCard'


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons';

export default function Tweets(){

  const tweets = [
    {id: 1, username:'CNN', screename: 'TwitterAPI', profile_pic: '/mnews-cv19.png', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dolor id sapien laoreet vulputate.', date:'4:19 PM · Oct 10, 2018'},
    {id: 2, username:'Twitter API', screename: 'TwitterAPI', profile_pic: '/mnews-cv19.png', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dolor id sapien laoreet vulputate.', date:'4:19 PM · Oct 10, 2018'}
  ];

  const renderTweets = tweets.map((tweet) => {
        return(
          <TweetCard className="tweet-area" key={tweet.id}>
            <img className="tweet-profile-pic" src={`${tweet.profile_pic}`} />
            <div className="tweet">
              <div className="tweet-user">
                <h7 className="twitter-username">{tweet.username}</h7>
                <h7 className="twitter-handle">@{tweet.username}</h7>
              </div>
              <p className="tweet-body">
                {tweet.body}
              </p>
            </div>
          </TweetCard>
        )
      })

  return(
    <div className="tweets">
      <div className="heading">
        <h1 className="title">Tweets</h1>
      </div>
      <div className="tweets-group">
        {renderTweets}
      </div>
    </div>
  )
}
