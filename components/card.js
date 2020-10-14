import Link from 'next/link'
import Head from 'next/head'


export default function Card(props){
  return(
    <div className="card">
      {props.children}
    </div>
  )
}
