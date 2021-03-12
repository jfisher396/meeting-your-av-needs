import React, { Component } from "react";
import axios from "axios";

export default class Projectors extends Component {
  state = {
    projectors: [],
    orderProjectors: [],
  };

  // makes a call to the gears db, slices out the projectors from other items in the db and sets them to state in projectors.
  componentDidMount() {
    axios
      .get("/api/gears")
      .then((response) => {
        this.setState({ projectors: response.data.slice(0, 3) });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // when "select" button is clicked the selected projector is added to "orderProjectors" in state along with any previously added projectors
  handleButtonClick = (id) => {
    axios.get("/api/gears/" + id).then((response) => {
      this.setState((prevState) => ({
        orderProjectors: [...prevState.orderProjectors, response.data],
      }));

      this.props.handleProjectors(this.state.orderProjectors);
    });
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
              {/*iterates through the projectors array from state and renders each one to the table*/}
              {projectors.map((item, index) => {
                return (
                  
                  <tr key={item._id}>
                    <td>{item.proj}</td>
                    <td>
                      <button
                        onClick={() => this.handleButtonClick(item._id)}
                        type="button"
                        className="success button select-btn"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                 
                );
                
              })}
              <tr>
                <td className="smaller-text">Power and video cables included</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
