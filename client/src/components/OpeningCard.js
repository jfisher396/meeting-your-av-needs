import React, { Component } from "react";
import projPic from "../media/projector.jpg";

export default class OpeningCard extends Component {
  render() {
    return (
      
        <div className="homeBox small-8 large-4">
          <a href="/order">
            <div className="card">
              <img src={projPic} alt="projector" />

              <div className="card-section">
                <p>
                  Do you just need a projector or screen or even a laptop for
                  your local meeting? Place a quick order here and we'll have
                  your equipment ready when you arrive.
                </p>
              </div>

              <div className="card-divider">
                <h4>Click here to start your AV order!</h4>
              </div>
            </div>
          </a>
        </div>
     
    );
  }
}
