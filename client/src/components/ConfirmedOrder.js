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
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cover</th>
                <th scope="col">Title</th>
                <th scope="col">Author(s)</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item) => {
                  console.log(item)
                return (
                  <tr key={item._id}>
                    
                    <td>{item.title}</td>
                    <td>{item.authors}</td>
                    <td>{item.description}</td>
                    <td>
                      <a
                        className="btn btn-info mt-3"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Books
                      </a>
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleButtonClick(item._id)}
                        className="btn btn-primary mt-3"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
