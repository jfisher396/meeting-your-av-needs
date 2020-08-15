import React, { Component } from "react";
import axios from "axios";

export default class Projectors extends Component {
  state = {
    projectors: [],
  };
  componentDidMount() {
    axios
      .get("/api/projectors")
      .then((response) => this.setState({ projectors: response.data }));
  }

  render() {
    const { projectors } = this.state;
    return (
      <>
        <h1>This is the inventory page</h1>

        {projectors.map((item) => (
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr key={item._id}>
                  
                  <td>{item.model}</td>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </>
    );
  }
}
