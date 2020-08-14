import React, { Component } from 'react'
import axios from 'axios'

export default class Inventory extends Component {

    state = {
        projectors: []
    }
    componentDidMount() {
        axios.get("/api/projectors").then(response => this.setState({projectors:response.data}))

    }

    render() {
        const {projectors}=this.state
        return (
            <div>
                <h1>This is the inventory page</h1>
                {projectors.map(item => (
                    <div key={item._id}>
                        <h1>{item.model}</h1>

                    </div>
                    
                ))}
            </div>
        )
    }
}
