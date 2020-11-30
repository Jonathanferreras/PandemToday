/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import TweetCard from './TweetCard'
import styles from './Tweets.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faShareSquare } from '@fortawesome/free-solid-svg-icons'

export default function Tweets (props) {
  const tweets = [
    { id: 1, username: 'CNN', screename: 'TwitterAPI', profile_pic: '/mnews-cv19.png', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dolor id sapien laoreet vulputate.', date: '4:19 PM · Oct 10, 2018' },
    { id: 2, username: 'Twitter API', screename: 'TwitterAPI', profile_pic: '/mnews-cv19.png', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: "The NFL says Sunday's game between the Pittsburgh Steelers and the Tennessee Titans has been postponed after the Ti…", date: '4:19 PM · Oct 10, 2018' },
    { id: 2, username: 'Twitter API', screename: 'TwitterAPI', profile_pic: '/mnews-cv19.png', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dolor id sapien laoreet vulputate.', date: '4:19 PM · Oct 10, 2018' }
  ]

  const width = props.screenwidth


  const renderTweets = tweets.map((tweet, tweet_id) => {
    if (width <= 982) {
      return (
        <TweetCard className="tweet-area" key={tweet_id}>
          <div className="tweet-user-area">
            <img className="tweet-profile-pic" src={`${tweet.profile_pic}`} />
            <div className="tweet-user">
              <h7 className="twitter-username">{tweet.username}</h7>
              <h7 className="twitter-handle">@{tweet.username}</h7>
            </div>
          </div>
          <div className="tweet-body">
              <p>
                {tweet.body}
              </p>
          </div>
        </TweetCard>
      )
    } else{
      return(
        <TweetCard className="tweet-area" key={tweet_id}>
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
    }
  })

  return (
    <div className="tweets">
      <div className="heading">
        <h1 className="title">Tweets</h1>
      </div>
      <div className="tweet-cards">
        {renderTweets}
      </div>
    </div>
  )
}
