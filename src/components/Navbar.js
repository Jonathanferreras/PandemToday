/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  })

  const renderNavBar = () => {
    console.log(width)
    if (width <= 414) {
      return (
        <div className="content">
          <img className="menu-icon" src='/menu.png' />
          <h2 className="logo"><span style={{ color: '#E84393' }}>PANDEM</span>TODAY</h2>
          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} className="sicon" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar-container">
          <h2 className="logo"><span style={{ color: '#E84393' }}>PANDEM</span>TODAY</h2>
          <div className="menu">
            <div className="links">
              <Link href="/"><a className="menu-item">Home</a></Link>
              <Link className="menu-item" href="/"><a>News</a></Link>
              <Link className="menu-item" href="/"><a>Statistics</a></Link>
              <Link className="menu-item" href="/"><a>Resources</a></Link>
            </div>
            <div className="search-bar">
              <input type="text" name="search" placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} className="sicon" />
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="navbar">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      {renderNavBar(width)}
    </div>

  )
}
