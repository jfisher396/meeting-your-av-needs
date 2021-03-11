import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default class Cart extends Component {
  state = {
    orders: [],
    fetching: true,
  };

  /*if prevProps.inCart does not match this.props.inCart the set state to this.props.inCart and set fetching to false.  Basically checking to see if 
  what is already in the cart and then updating the cart to add current item*/
  componentDidUpdate(prevProps) {
    if (prevProps.inCart !== this.props.inCart) {
      this.setState({
        orders: this.props.inCart,
        fetching: false,
      });
    }
  }

  handleConfirmOrder = (event) => {
    event.preventDefault();
    console.log(this.state.orders);

    if (this.state.orders) {
      API.saveOrder({
        items: this.state.orders,
      })
        .then(() => this.props.history.push("/customer-info"))
        .catch((err) => console.log(err));
    } 
  };

  render() {
    const { orders, fetching } = this.state;
    return (
      <div className="cart-card card">
        <div className="card-divider">
          <h4>Your items:</h4>
        </div>

        <div className="card-section cart-card__section">
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

          <div id="cart-div">
            <Link to="/customer-info">
              <button
                onClick={this.handleConfirmOrder}
                type="button"
                className="primary button confirm-order-button"
                id="confirm-order-button"
              >
                Confirm order and go to customer info screen
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
