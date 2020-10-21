import Link from 'next/link'
import Head from 'next/head'
import Card from './Card'



export default function Stats(){
  const stats = [
    {title: 'Cases', stat: '34.2M'}
  ];

  // const renderStats = tweets.map((tweet) => {
  //   return(
  //
  //   )
  // })

  return(
    <div className="stats">
      <h1>
        Stats
      </h1>
      <div className="filter">
        <h4 className="stats-filter">Global</h4>
        <h5 className="see-more">See More</h5>
      </div>


        <Card>
          <h2 className="card-title">Cases</h2>
          <div className="card-stats-area">
            <div className="green-arrow-down"></div>
            <h1 className="case-numbers">34.2M</h1>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Recovered</h2>
          <div className="stats-area">
            <div className="green-arrow-up"></div>
            <h1 className="case-numbers">23.7M</h1>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Deaths</h2>
          <div className="stats-area">
            <div className= "red-arrow-up"></div>
            <h1 className="case-numbers">1.02M</h1>
          </div>
        </Card>
    </div>
  )
}
