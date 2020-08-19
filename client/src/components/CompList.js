import React, { Component } from "react";
import axios from "axios";

export default class Laptops extends Component {
  state = {
    laptops: [],
    orderLaptops: []
  };
  componentDidMount() {
    axios
      .get("/api/gears")
      .then((response) => this.setState({ laptops: response.data.slice(3, 5) }));
  }

  handleButtonClick = (id) => {
    axios.get("/api/gears/" + id).then((response) => {
      this.setState((prevState) => ({
        orderLaptops: [...prevState.orderLaptops, response.data],
      }));
      this.props.handleLaptops(this.state.orderLaptops);
    });
  };

  render() {
    const { laptops } = this.state;
    return (
      <>
        <div className="container">
          <h3>Laptops</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {laptops.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.comp}</td>
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
