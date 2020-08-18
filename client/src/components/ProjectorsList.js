import React, { Component } from "react";
import axios from "axios";

export default class Projectors extends Component {
  state = {
    projectors: [],
  };
  componentDidMount() {
    axios
      .get("/api/gears")
      .then((response) => {
        console.log(response)
        this.setState({ projectors: response.data.slice(0, 3) })
      });
  }

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
                    {/* <th scope="col">Quantity Available</th> */}
                    </tr>
                </thead>
                <tbody>
                    {projectors.map((item) => {
                     return   (   
                        <tr key={item._id}>
                            <td>{item.proj}</td>
                            <td><button type="button" className="success button">Select</button></td>
                        </tr>
                     )
                     })}
                </tbody>
            </table>
        </div>
      </>
    );
  }
}
