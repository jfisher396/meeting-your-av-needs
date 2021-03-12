import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default class Cart extends Component {
  state = {
    cartItems: [],
    fetching: true,
  };

  /*if prevProps.inCart does not match this.props.inCart the set state to this.props.inCart and set fetching to false.  Basically checking to see if 
  what is already in the cart and then updating the cart to add current item*/
  componentDidUpdate(prevProps) {
    if (prevProps.inCart !== this.props.inCart) {
      this.setState({
        cartItems: this.props.inCart.flat(),
        fetching: false,
      });
    }
  }

  // if there is 1 item or more in cart then create an order in the db
  handleConfirmOrder = (event) => {
    event.preventDefault();

    if (this.state.cartItems.length > 0) {
      API.saveOrder({
        items: this.state.cartItems,
      })
        .then(() => this.props.history.push("/customer-info"))
        .catch((err) => console.log(err));
    } else {
      alert("Please add item to the cart!");
    }
  };

  render() {
    const { cartItems, fetching } = this.state;
    
    return (
      <div className="cart-card card">
        <div className="card-divider">
          <h4>Your items:</h4>
        </div>

        <div className="card-section cart-card__section">
          {!fetching &&
            cartItems.map((item, index) => {
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
