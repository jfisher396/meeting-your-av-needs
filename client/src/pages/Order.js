import React, { Component } from "react";
import Projectors from "../components/ProjectorsList";
import Screens from "../components/ScreensList";
import Laptops from "../components/CompList";
import OrderTable from "../components/OrderTable";

export default class Order extends Component {
  state = {
    projectors: [],
    screens: [],
    laptops: []
  };

  handleProjectors = (projectors) => {
    this.setState({ projectors });
  };

  handleScreens = (screens) => {
    this.setState({ screens });
  };

  handleLaptops = (laptops) => {
    this.setState({ laptops });
  };

  render() {
    // console.log(this.state)
    return (
      <>
        <div className="grid-container">
          <div className="grid-x grid-margin-x small-up-2 medium-up-3">
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Projectors handleProjectors={this.handleProjectors} />
                </div>
              </div>
            </div>

            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Screens handleScreens={this.handleScreens} />
                </div>
              </div>
            </div>

            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Laptops handleLaptops={this.handleLaptops} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <OrderTable
              orderP={this.state.projectors}
              orderS={this.state.screens}
              orderL={this.state.laptops}
            />
          </div>
        </div>
      </>
    );
  }
}
