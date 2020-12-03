import React, { Component } from "react";
import InfoForm from "../components/InfoForm";
import ConfirmedOrder from "../components/ConfirmedOrder";

export default class EnterInfo extends Component {
  render() {
    return (
      <>
        <div className="grid-x grid-margin-x small-6 medium-up-4 align-center">
          <div className="cell">
            <div className="info card animate__animated animate__backInDown">
              <InfoForm />
            </div>
          </div>
        </div>
        <div className="grid-x grid-margin-x small-6 medium-up-4 align-center">
          <div className="cell">
            <div className="card animate__animated animate__backInUp">
              <ConfirmedOrder />
            </div>
          </div>
        </div>
        {/* <Dashboard /> */}
      </>
    );
  }
}
