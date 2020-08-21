import React, { Component } from 'react'
import OpeningCard from '../components/OpeningCard'
// import foundation from 'react-foundation'

export default class Home extends Component {


    render() {
        return (
          <>
            <div className="grid-container">
              <div className="cell large-4"></div>
              <div className="grid-x">
                <OpeningCard />
              </div>
              <div className="cell large-4"></div>
            </div>
          </>
        );
    }
}
