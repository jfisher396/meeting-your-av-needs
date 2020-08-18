import React, { Component } from "react";
import axios from "axios";

export default class OrderTable extends Component {
  state = {
    orders: [],
  };

  handleButtonClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Your Order:</th>
            </tr>
          </thead>
          <tbody>
            {/* {orders.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td>{item.item}</td>
                    <td></td>
                  </tr>
                </>
              );
            })} */}
            <td>
              <button
                onClick={this.handleButtonClick}
                type="button"
                className="primary button"
              >
                Confirm order and go to customer info screen
              </button>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}
