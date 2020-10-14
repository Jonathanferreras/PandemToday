import Navbar from './Navbar';
import Footer from './Footer';


const Layout = (props) => {
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
}
