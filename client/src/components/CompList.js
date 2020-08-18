import React, { Component } from "react";
import axios from "axios";

export default class Laptops extends Component {
  state = {
    laptops: [],
  };
  componentDidMount() {
    axios
      .get("/api/gears")
      .then((response) => this.setState({ laptops: response.data.slice(3, 5) }));
  }

  handleButtonClick = (id) => {
    console.log(id)
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
