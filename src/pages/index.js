/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => console.log(data))
  })
  return (
    <div>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <span style={{ color: '#E84393' }}>Pandem</span>Today
        </h1>
      </main>
    </div>
  )
}
