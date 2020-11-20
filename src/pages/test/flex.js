/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card/Card'

export default function flex () {
  return (
    <div className="flexbox">
      <div className="side">
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
      
      <div className="main">
        <img className="imagesize" src='/mnews-cv19_2.jpg' />
      </div>

      <div className="side">
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
      
    </div>
  )
}

