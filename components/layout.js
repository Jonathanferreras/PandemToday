import Navbar from './Navbar';
// import Footer from './Footer';


const Layout = (props) => {
  return(
    <div className="">
      <Navbar />
      {props.children}
    </div>
  )

}

export default Layout;
