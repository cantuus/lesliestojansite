import React, { Component } from "react";
import menu from "../../images/menu/Reception Menu.png"

import './style.css'

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <div className="container">
                    <div className="col-12 need-to-know-area">
                        <div className="section-title text-center">
                            <h2>Reception Menu</h2>
                            <div className="col-lg">
                                <div className="program-img">
                                    <img src={menu} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;