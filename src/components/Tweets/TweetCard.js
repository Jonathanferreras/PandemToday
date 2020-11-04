/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Link from 'next/link'
import Head from 'next/head'
import Card from '../Card/Card'

export default function TweetCard (props) {
  return (
    <Card type="tweet">
      {props.children}
    </Card>
  )
}
