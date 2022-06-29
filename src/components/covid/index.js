import React, { Component } from "react";
import './style.css'


class Covid extends Component {
    render() {
        return (
            <div id="covid" className="covid-area">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>COVID Protocols for Our Wedding</h2>
                            <div className="covid-area-paragraph">
                                <p>We are asking guests to self-test two days OR the day before the wedding. Please inform us of your results if they are positive.</p>
                            </div>
                            <br/>
                            <div className="covid-area-paragraph">
                                <p>Depending on the county updates that week, we may request that you wear your mask during the ceremony (outdoors) and/or reception (indoors). If you do not have a mask, we will provide one for you if needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Covid;