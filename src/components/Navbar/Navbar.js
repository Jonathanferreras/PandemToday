/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  const [active_page, setActive_page] = useState(42);
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  })

  const renderNavBar = () => {
    console.log(width)
    return(
      <React.Fragment>
        <div className="navbar-content nav-desktop">
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

        <div className="navbar-content nav-mobile">
          <div className="menu">
            <img className="menu-icon" src='/menu.png' />
            <h2 className="logo"><span style={{ color: '#E84393' }}>PANDEM</span>TODAY</h2>
          </div>
          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} className="sicon" />
          </div>
        </div>
      </React.Fragment>
    )
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
