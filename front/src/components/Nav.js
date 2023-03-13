
import "./Nav.scss"

import { Link } from "react-router-dom"

const Nav = () => {

 return(
 <nav className="nav-menu">
   <ul>
    <li><Link to="/" className="nav-button">Feed <i className="nav-icon"></i></Link></li>
    <li><Link to="/search" className="nav-button">Search</Link></li>
    <li><Link to="/post" className="nav-button">Post</Link></li>
   </ul>
  </nav>
  
  )

}

export default Nav