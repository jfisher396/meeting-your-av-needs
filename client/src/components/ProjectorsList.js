import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export default class Projectors extends Component {
  state = {
    projectors: [],
  };
  componentDidMount() {
    axios.get("/api/gears").then((response) => {
      this.setState({ projectors: response.data.slice(0, 3) });
    });
  }

  handleButtonClick = (id) => {
    console.log(id);
  };

  render() {
    const { projectors } = this.state;

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
                  <>
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
                    {/* <Select options={item} /> */}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
