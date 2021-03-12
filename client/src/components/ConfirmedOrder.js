import React, { Component } from "react";
import axios from "axios";

export default class ConfirmedOrder extends Component {
  state = {
    order: [],
  };
  // calls the latest order from the db at page load
  componentDidMount() {
    this.orderApi();
  }

  // makes a call to the db and puts the return data into state as "order"
  orderApi() {
    axios.get("/api/orders").then((response) => {
      return this.setState({ order: response.data });
    });
  }

  //renders the data from order in state to the page
  render() {
    
    const { order } = this.state;

    return (
      <>
        <div className="cart card">
          <div className="card-divider">
            <h4>Your confirmed order:</h4>
          </div>
          <div className="card-section">

             {order.map((item, index) => {
              // console.log(item.orderCreated);
              // const orderId = item._id;
              const orderDate = item.orderCreated;
              // console.log(orderId)

              return (
                <div key={order._id}>
                  {item.items.map((i, index) => {
                    // console.log(i);

                    return (
                      <>
                        <p key={i._id} id={`item${index}`}>{i.proj || i.screen || i.comp}</p>
                      </>
                    );
                  })}
                  {/* <p className="smaller-text">{`Order #: ${orderId}`}</p> */}
                  <p className="smaller-text">{orderDate}</p>
                </div>
                
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
