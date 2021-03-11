import React, { Component } from "react";
import axios from "axios";

export default class Screens extends Component {
  state = {
    screens: [],
    orderScreens: []
  };

  // makes a call to the gears db, slices out the screens from other items in the db and sets them to state in screens.
  componentDidMount() {
    axios.get("/api/gears").then((response) => 
      this.setState({ screens: response.data.slice(5) }));
  }

  // when "select" button is clicked the selected creens is added to "orderScreens" in state along with any previously added screens
  handleButtonClick = (id) => {
    axios.get("/api/gears/" + id).then((response) => {
      this.setState((prevState) => ({
        orderScreens: [...prevState.orderScreens, response.data],
      }));
      this.props.handleScreens(this.state.orderScreens);
    });
  };

  render() {
    const { screens } = this.state;
    return (
      <>
        <div className="container">
          <h3>Screens</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Size</th>
              </tr>
            </thead>
            <tbody>
              {/*iterates through the screens array from state and renders each one to the table*/}
              {screens.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.screen}</td>
                    {/* <td>{item.quantity}</td> */}
                    <td>
                      <button
                        onClick={() => this.handleButtonClick(item._id)}
                        type="button"
                        className="success button select-btn"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
