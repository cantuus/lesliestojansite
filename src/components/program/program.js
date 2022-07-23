import React, { Component } from "react";
import programOne from "../../images/program/program1.png"
import programTwo from "../../images/program/program2.png"
import './style.css'

class Program extends Component {
    render() {
        return (
            <div id="program">
                <div className="container">
                    <div className="col-12 need-to-know-area">
                        <div className="section-title text-center">
                            <h2>Program</h2>
                            <div className="col-lg">
                                <div className="program-img">
                                    <img src={programOne} />
                                </div>
                                <div className="program-img">
                                    <img src={programTwo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Program;