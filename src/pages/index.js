/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Layout from '../components/Layout'
import Stats from '../components/Stats/Stats'
import Headlines from '../components/Headlines/Headlines'
import MoreNews from '../components/MoreNews/MoreNews'
import Tweets from '../components/Tweets/Tweets'

export default function Home () {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    setWidth(window.innerWidth)
  })

  return (
    <Layout>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className="flex-container">
        <div className="">
          <Stats />
        </div>
        <div className="main-area">
        <Headlines screenwidth={width} />
        <Tweets />
        </div>
        <div className="">
         <MoreNews />
        </div>
      </main>
    </Layout>
  )
}
