import React, { Component } from "react";

export default class ConfirmedOrder extends Component {
  state = {
    order: [],
  };

  bookApi() {
    axios.get("/api/orders").then((response) => {
      return this.setState({ order: response.data });
    });
  }

  render() {
    return (
    <div>
        <h1>This is the confirmed order table</h1>
    </div>
    )
  }
}
