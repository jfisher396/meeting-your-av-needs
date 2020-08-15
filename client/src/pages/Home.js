import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
          <div className="grid-x grid-margin-x">
            <div className="cell medium-6 large-4">
              <div className="callout warning">
                <h5>This is a callout.</h5>
                <p>
                  It has an easy to override visual style, and is appropriately
                  subdued.
                </p>
                <Link to="/inventory">
                  EQUIPMENT
                </Link>
              </div>
            </div>
          </div>
        );
    }
}
