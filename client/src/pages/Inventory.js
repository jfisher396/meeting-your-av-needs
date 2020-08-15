import React, { Component } from 'react'

import Projectors from "../components/ProjectorsList"

export default class Inventory extends Component {

    render() {
        
        return (
          <>
            <div className="grid-container">
              <div class="grid-x grid-margin-x small-up-2 medium-up-3">
                <div class="cell">
                  <div className="card">
                    <div className="card-section">
                      <Projectors />
                    </div>
                  </div>
                </div>

                <div class="cell">
                  <div className="card">
                    <div className="card-section">
                      <Projectors />
                    </div>
                  </div>
                </div>

                <div class="cell">
                  <div className="card">
                    <div className="card-section">
                      <Projectors />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}
