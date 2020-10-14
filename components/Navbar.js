import Link from 'next/link'
import Head from 'next/head'


export default function Navbar(){
  return(
    <div className="navbar">
      <div className="content">
        <h2 className="logo"><span style={{ color: '#E84393' }}>PANDEM</span>TODAY</h2>
        <div className="menu">
          <Link  href="/"><a className="menu-item">Home</a></Link>
          <Link className="menu-item" href="/"><a>News</a></Link>
          <Link className="menu-item" href="/"><a>Statistics</a></Link>
          <Link className="menu-item" href="/"><a>Resources</a></Link>

          <div className="search-bar">
            <input type="text" name="search" placeholder="Search.." />
          </div>
        </div>
      </div>
    </div>
  )
}
