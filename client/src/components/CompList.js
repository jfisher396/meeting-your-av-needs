import React, { Component } from "react";
import axios from "axios";

export default class Laptops extends Component {
    state = {
        laptops: [],
    };
    componentDidMount() {
        axios
            .get("/api/laptops")
            .then((response) => this.setState({ laptops: response.data }));
    }

    render() {
        const { laptops } = this.state;
        return (
            <>
                <div className="container">
                    <h3>Laptops</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Model</th>
                                <th scope="col">Quantity Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {laptops.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.model}</td>
                                        <td>{item.quantity}</td>
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