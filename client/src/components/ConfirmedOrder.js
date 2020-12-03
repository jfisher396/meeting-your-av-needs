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
                // console.log(item);

                return (
                  <div id={index} key={index}>
                    {item.items.map((i, index) => {
                      // console.log(item._id);
                      return (
                        <>
                          <p id={i._id} key={`${index}_${i._id}_${index}`}>
                            {(i.proj && i.proj) ||
                              (i.screen && i.screen) ||
                              (i.comp && i.comp)}
                          </p>
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        
      </>
    );
  }
}
