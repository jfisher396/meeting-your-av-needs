import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

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
      // console.log(this.props.ordering)
    }
  }

  componentDidMount() {
    // console.log(this.props.ordering.flat());
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    // console.log(this.state.orders)
    //need an if statement here to confirm items have been selected
    if (this.state.orders) {
      API.saveOrder({
        items: this.state.orders,
      })
        .then(() => this.props.history.push("/customer-info"))
        .catch((err) => console.log(err));
    } else {
      alert("Please select at least one item");
    }
  };

  render() {
    // console.log(this.state.orders.flat());
    const { orders, fetching } = this.state;
    return (
      <div className="small-8 large-4">
        <div className="card">
          <div className="card-divider">
            <h4>Your items:</h4>
          </div>
          <div className="card-section">
            {!fetching &&
              orders.flat().map((item, index) => {
                return (
                  <p id={item._id} key={`${item._id}_${index}`}>
                    {(item.proj && item.proj) ||
                      (item.screen && item.screen) ||
                      (item.comp && item.comp)}
                  </p>
                );
              })}
            <div>
              <Link to="/customer-info">
                <button
                  onClick={this.handleButtonClick}
                  type="button"
                  className="primary button"
                >
                  Confirm order and go to customer info screen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
