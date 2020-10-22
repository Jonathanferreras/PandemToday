import Link from 'next/link'
import Head from 'next/head'
import Card from './Card'



export default function TweetCard(props){
  return(
    <Card type="tweet">
      {props.children}
    </Card>
  )
}
