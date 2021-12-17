import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import './style.css'

class Saveday extends Component {

    render() {
        return (
            <div className="count-down-area">
                <div className="count-down-sectionparallax">
                    <div className="container">
                        <div className="count-down-item count-down-item2">
                            <div className="row">
                                <div className="col-12 col-md-4 section-area">
                                    <div className="section-sub"></div>
                                    <h2 className="big">We're excited to see you!</h2>
                                </div>
                                <div className="col-12 col-md-8 clock-area">
                                    <div className="count-down-clock">
                                        <CountDown
                                            deadline="July 23, 2022"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saveday;