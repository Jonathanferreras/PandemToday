/* eslint-disable react/react-in-jsx-scope */

export default function Card (props) {
  const type = props.type

  if (type === 'tweet') {
    return (
      <div className="tweet-card">
        {props.children}
      </div>
    )
  } else {
    return (
      <div className="card">
        {props.children}
      </div>
    )
  }
}
