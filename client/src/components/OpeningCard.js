import React, { Component } from 'react'

export default class OpeningCard extends Component {
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
                                <h4>Click here to start your AV order</h4>
                                <p>
                                    Just need a projector or screen or even a laptop for your local meeting? Place a quick order here and we'll have your equipment ready when you arrive.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}
