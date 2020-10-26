/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
