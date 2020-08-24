import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              <Link to="/home" className="link">
                Meeting Your (AV) Needs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar