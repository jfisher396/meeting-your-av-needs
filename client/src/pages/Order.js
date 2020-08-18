import React, { Component } from 'react'
import Projectors from "../components/ProjectorsList"
import Screens from "../components/ScreensList"
import Laptops from "../components/CompList"

export default class Order extends Component {

    render() {
        
        return (
          <>
            <div className="grid-container">
              <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                <div className="cell">
                  <div className="card">
                    <div className="card-section">
                      <Projectors />
                    </div>
                  </div>
                </div>

                <div className="cell">
                  <div className="card">
                    <div className="card-section">
                      <Screens />
                    </div>
                  </div>
                </div>

                <div className="cell">
                  <div className="card">
                    <div className="card-section">
                      <Laptops />
                    </div>
                  </div>
                </div>
              </div>
              <div>Order Table Here</div>
            </div>
          </>
        );
    }
}
