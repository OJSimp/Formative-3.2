
import "./Nav.scss"

import { NavLink } from "react-router-dom"

const Nav = () => {

 return(
 <nav className="nav-menu">
   <ul>
    <li><NavLink to="/" className="nav-button">Feed <i className="nav-icon"></i></NavLink></li>
    <li><NavLink to="/search" className="nav-button">Search</NavLink></li>
    <li><NavLink to="/post" className="nav-button">Post</NavLink></li>

    
   </ul>
  </nav>
  
  )

}

export default Nav