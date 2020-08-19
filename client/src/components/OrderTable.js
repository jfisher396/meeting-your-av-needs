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
      };
      // if (prevProps.orderS !== this.props.orderS) {
      //   this.setState({
      //     orders: [...this.props.orderS],
      //   });
      // }
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
              <th scope="col">Projector(s):</th>
              <th scope="col">Screen(s):</th>
              <th scope="col">Laptop(s):</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.proj}</td>
                  <td>{item.screen}</td>
                  <td>{item.comp}</td>
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
