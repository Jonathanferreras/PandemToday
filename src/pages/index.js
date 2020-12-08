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

  const renderLayout = () => {
    return(
      <React.Fragment>
        <div className="layout-desktop">
          <div className="stat-area col">
            <Stats screenwidth={width} />
          </div>
          <div className="main-area col">
            <Headlines screenwidth={width} />
            <Tweets />
          </div>
          <div className="morenews-area col">
            <MoreNews />
          </div>
        </div>


        <div className="layout-mobile">
          <div className="stat-area col">
            <Stats screenwidth={width} />
          </div>
          <div className="main-area col">
            <Headlines screenwidth={width} />
          </div>
          <div className="morenews-area col">
            <MoreNews />
          </div>
          <div className="main-area col">
            <Tweets screenwidth={width} />
          </div>
        </div>

      </React.Fragment>
    )
  }

  return (
    <Layout>
      <Head>
        <title>PandemToday</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className="flex-container">
        {renderLayout()}
      </main>
    </Layout>
  )
}
