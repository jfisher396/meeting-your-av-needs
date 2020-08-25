import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar top-bar">
        <div>
          <h3 className="menu-text">
            <Link to="/home" className="link">
              Meeting Your (AV) Needs
            </Link>
          </h3>
        </div>

        <div className="contactDiv">
          <p>
            <span className="bold">Phone:</span> 800.555.1234
          </p>
          <p>
            <span className="bold">Email:</span> avneeds@email.com
          </p>
          <p>
            <span className="bold">Address:</span> 123 Center Street
          </p>
        </div>
      </div>
    );
  }
}

export default NavBar;
