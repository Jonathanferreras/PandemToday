import Link from 'next/link'
import Head from 'next/head'


export default function Card(props){
  const type = props.type;
  console.log(type);

  if (type == 'tweet'){
      return(
        <div className="tweet-card">
          {props.children}
        </div>
      );
  }
  else{
    return (
      <div className="card">
        {props.children}
      </div>
    );
  }

}
