import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="top-bar">
  <div className="top-bar-left">
    <ul className="dropdown menu" data-dropdown-menu>
      <li className="menu-text">Site Title</li>
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div className="top-bar-right">
    
  </div>
</div>
    )
  }
}

export default NavBar