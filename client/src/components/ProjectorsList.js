import React, { Component } from "react";
import axios from "axios";

export default class Projectors extends Component {
  state = {
    projectors: [],
    orderProjectors: []
  };
  componentDidMount() {
    axios.get("/api/gears").then((response) => {
      this.setState({ projectors: response.data.slice(0, 3) });
    });
  }

  handleButtonClick = (id) => {
    axios.get("/api/gears/"+ id).then((response) => {
      this.setState((prevState) => ({
        orderProjectors: [
          ...prevState.orderProjectors,response.data
        ]
      }));
      this.props.handleProjectors(this.state.orderProjectors)
    })
  };

  render() {
    const { projectors } = this.state;
    // console.log(this.state)
    return (
      <>
        <div className="container">
          <h3>Projectors</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Model</th>
              </tr>
            </thead>
            <tbody>
              {projectors.map((item) => {
              
                return (
                  
                    <tr key={item._id}>
                      <td>{item.proj}</td>
                      <td>
                        <button
                          onClick={() => this.handleButtonClick(item._id)}
                          type="button"
                          className="success button"
                        >
                          Select
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
