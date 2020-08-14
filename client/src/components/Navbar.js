import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (

      <Navbar bg="light" expand="lg" className="fixed-top mt-80">
        <Navbar.Brand><Link to="/home" className="link siteTitle">Projector Rentals</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/about" className="link">About Me</Link></Nav.Link>
            <Nav.Link><Link to="/portfolio" className="link">Portfolio</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className="link">Contact</Link></Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse> */}
      </Navbar>

    );
  }
}

export default NavBar