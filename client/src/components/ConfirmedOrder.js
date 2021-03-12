import React, { Component } from "react";
import axios from "axios";

export default class ConfirmedOrder extends Component {
  state = {
    order: [],
  };

  componentDidMount() {
    this.orderApi();
  }

  orderApi() {
    axios.get("/api/orders").then((response) => {
      return this.setState({ order: response.data });
    });
  }

  

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
                        <p id={`item${index}`} key={i._id}>{i.proj || i.screen || i.comp}</p>
                      </>
                    );
                  })}
                  {/* <p className="order-info">{`Order #: ${orderId}`}</p> */}
                  <p className="order-info">{orderDate}</p>
                </div>
                
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
