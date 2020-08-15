import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              <Link to="/" className="link">
                AV Equipment Rental
              </Link>
            </li>
            {/* <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li> */}
          </ul>
        </div>
        <div className="top-bar-right">
          800-555-1234
        </div>
      </div>
    );
  }
}

export default NavBar