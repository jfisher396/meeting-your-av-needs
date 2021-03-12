import React, { Component } from "react";
import axios from "axios";

export default class Laptops extends Component {
  state = {
    laptops: [],
    orderLaptops: []
  };

  // makes a call to the gears db, slices out the laptops from other items in the db and sets them to state in laptops.
  componentDidMount() {
    axios
      .get("/api/gears")
      .then((response) => this.setState({ laptops: response.data.slice(3, 5) }));
  }

  // when "select" button is clicked the selected laptop is added to "orderProjectors" in state along with any previously added laptops
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
              {/*iterates through the laptops array from state and renders each one to the table*/}
              {laptops.map((item) => {

                
                return (
                  <tr key={item._id}>
                    <td>{item.comp}</td>
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
