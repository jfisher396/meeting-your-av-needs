import React, { Component } from "react";
import axios from "axios";

export default class Screens extends Component {
  state = {
    screens: [],
    orderScreens: []
  };
  componentDidMount() {
    axios.get("/api/gears").then((response) => 
      this.setState({ screens: response.data.slice(5) }));
  }

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
                {/* <th scope="col">Quantity Available</th> */}
              </tr>
            </thead>
            <tbody>
              {screens.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.screen}</td>
                    {/* <td>{item.quantity}</td> */}
                    <td>
                      <button
                        onClick={() => this.handleButtonClick(item._id)}
                        type="button"
                        className="success button"
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
