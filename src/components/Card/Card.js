/* eslint-disable react/react-in-jsx-scope */
// Card
import styles from './Card.module.css'

export default function Card (props) {
  const type = props.type

  if (type === 'tweet') {
    return (
      <div className="tweet-card">
        {props.children}
      </div>
    )
  } 
  else if (type === 'news') {
    return (
      <div className="news-card">
        {props.children}
      </div>
    )
  }
  else {
    return (
      <div className="card">
        {props.children}
      </div>
    )
  }
}
