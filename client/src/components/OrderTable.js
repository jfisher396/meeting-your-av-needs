import React, { Component } from "react";
import API from "../utils/API"

export default class OrderTable extends Component {
  state = {
    orders: [],
    fetching: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.ordering !== this.props.ordering) {
      this.setState({
        orders: this.props.ordering,
        fetching: false,
      });
    }
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    // console.log(this.state.orders)
    API.saveOrder({
      items: this.state.orders
      
      
    }).catch((err) => console.log(err));
  };

  render() {
    // console.log(this.state);
    const { orders, fetching } = this.state;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Projector(s):</th>
              <th scope="col">Screen(s):</th>
              <th scope="col">Laptop(s):</th>
            </tr>
          </thead>
          <tbody>
            {!fetching &&
              orders[0].map((item) => {
                // console.log(item)
                return (
                  <tr key={item._id}>
                    {/* <tr key={item._id}> */}
                    <td>{item.proj}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button
          onClick={this.handleButtonClick}
          type="button"
          className="primary button"
        >
          Confirm order and go to customer info screen
        </button>
      </div>
    );
  }
}
