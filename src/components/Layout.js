/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
