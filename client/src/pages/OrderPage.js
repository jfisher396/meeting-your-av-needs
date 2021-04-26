import React, { Component } from "react";
// import InfoForm from "../components/InfoForm";
import Projectors from "../components/ProjectorsList";
import Screens from "../components/ScreensList";
import Laptops from "../components/CompList";
import Cart from "../components/Cart";

export default class Order extends Component {
  
  state = {
    projectors: [],
    screens: [],
    laptops: [],
  };

  handleProjectorSelect = (projectors) => {
    this.setState({ projectors });
  };

  handleScreenSelect = (screens) => {
    this.setState({ screens });
  };

  handleLaptopSelect = (laptops) => {
    this.setState({ laptops });
  };

  render() {
    
    return (
      <>
        <div className="grid-container">
          <div>
            <h3 className="select">Please select your items:</h3>
          </div>
          <div className="grid-x grid-margin-x medium-up-3">
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Projectors handleProjectors={this.handleProjectorSelect} />
                </div>
              </div>
            </div>
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Screens handleScreens={this.handleScreenSelect} />
                </div>
              </div>
            </div>
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <Laptops handleLaptops={this.handleLaptopSelect} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid-x grid-margin-x medium-up-3 align-center">
            <div className="cell">
              <div className="card">
                <Cart
                  inCart={[
                    this.state.projectors,
                    this.state.screens,
                    this.state.laptops,
                  ]}
                  history={this.props.history}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
