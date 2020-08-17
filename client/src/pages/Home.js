import React, { Component } from 'react'

export default class Home extends Component {


    render() {
        return (
          <div className="grid-x grid-margin-x">

            
              <div className="homeBox cell medium-6 large-4">
              <a href="/inventory">
                <div className="media-object">
                  <div className="media-object-section">
                    <div className="thumbnail">
                      <img
                        src="http://www.fillmurray.com/200/300"
                        alt="fill murray"
                      />
                    </div>
                  </div>
                  <div className="media-object-section">
                    <h4>Dreams feel real while we're in them.</h4>
                    <p>
                      I'm going to improvise. Listen, there's something you
                      should know about me... about inception. An idea is like a
                      virus, resilient, highly contagious. The smallest seed of
                      an idea can grow. It can grow to define or destroy you.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          
          </div>
        );
    }
}
