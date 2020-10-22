import Link from 'next/link'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Navbar(){
  return(
    <div className="navbar">
      <div className="content">
        <h2 className="logo"><span style={{ color: '#E84393' }}>PANDEM</span>TODAY</h2>
        <div className="menu">
          <div className="links">
            <Link  href="/"><a className="menu-item">Home</a></Link>
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
    </div>
  )
}
