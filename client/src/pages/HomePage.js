import React, { Component } from 'react'
import OpeningCard from '../components/OpeningCard'

export default class Home extends Component {

    render() {
        return (
          <>
            <div className="grid-container">
              <div className="grid-x grid-padding-x align-center">
                <OpeningCard />
              </div>
            </div>
          </>
        );
    }
}
