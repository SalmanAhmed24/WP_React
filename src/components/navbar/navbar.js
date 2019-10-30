import React,{ Component } from 'react';
import "./navbar.scss";
import { Link } from "@reach/router";

class Navbar extends Component{
    render(){
        return( 
        <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}
export default Navbar;