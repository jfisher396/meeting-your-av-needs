import React, { Component } from "react";

export default class OrderTable extends Component {
  state = {
    orders: [],
  };

  componentDidUpdate(prevProps) {
      if (prevProps.orderP !== this.props.orderP) {
          this.setState({
              orders: [...this.props.orderP]
          }) 
      }
    }

  handleButtonClick = (event) => {
    event.preventDefault();
  };

  render() {
      console.log(this.state)
      const { orders } = this.state
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Your Order:</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.proj}</td>
                </tr>
              );
            })}
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
