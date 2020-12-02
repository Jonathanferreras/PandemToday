/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import Card from '../Card/Card'
import DropdownFilter from './DropdownFilter'
import styles from './Stats.module.css'

export default function Stats (props) {
  const stats = [
    { title: 'Cases', stat: '34.2M' }
  ]

  const width = props.screenwidth

  const renderStats = () => {
    // console.log('new headline')
    // console.log(headlineNum)

    if (width <= 982) {
      return (
        <React.Fragment>
            <Card>
              <div className="stat">
                <h5 className="card-title">Cases</h5>
                <h5 className="case-numbers">34.1M</h5>
              </div>
              <div className="stat">
                <h5 className="card-title">Recovered</h5>
                <h5 className="recovered-numbers">23.7M</h5>
              </div>
              <div className="stat">
                <h5 className="card-title">Deaths</h5>
                <h5 className="death-numbers">1.02M</h5>
              </div>
            </Card>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="filter">
            <DropdownFilter />
            <h5 className="see-more">See More</h5>
          </div>

          <div className="stat-cards">
            <Card>
              <h2 className="card-title">Cases</h2>
              <div className="card-stats-area">
                <div className="green-arrow-down"></div>
                <h1 className="case-numbers">34.2M</h1>
              </div>
            </Card>

            <Card>
              <h2 className="card-title">Recovered</h2>
              <div className="card-stats-area">
                <div className="green-arrow-up"></div>
                <h1 className="case-numbers">23.7M</h1>
              </div>
            </Card>

            <Card>
              <h2 className="card-title">Deaths</h2>
              <div className="card-stats-area">
                <div className= "red-arrow-up"></div>
                <h1 className="case-numbers">1.02M</h1>
              </div>
            </Card>
          </div>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="stats">
      <h1 className="title">
        Stats
      </h1>

      {renderStats()}

    </div>
  )
}
