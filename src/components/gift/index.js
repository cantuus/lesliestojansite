import React, { Component } from "react";
import './style.css'


class Gift extends Component {
  render() {
    return (
      <div id="registry" className="gift-area">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Gift Registrations</h2>
              <p>We have chosen to use our gift registry through Blueprint to fund our honeymoon experience. You are welcome to select any item to make a contribution. We appreciate your support and help in making our honeymoon a magical experience.</p>
            </div>
          </div>
          <div className="col-lg" style={{ display: "flex", justifyContent: "center"}}>
            <div className="btn"><a href="https://www.blueprintregistry.com/registry/cory-stojan-wedding-registry-7-23-2022">Click Here for Wedding Registry</a></div>
          </div>
          <div className="section-title text-center">
            <p>If you would prefer to directly purchase an item, we have also linked Ashley's Bridal Shower Registry through Amazon.</p>
          </div>
          <div className="col-lg" style={{ display: "flex", justifyContent: "center"}}>
            <div className="btn"><a href="https://www.amazon.com/registries/custom/3CH18XEEPIQQJ/guest-view">Click Here for Bridal Shower Registry</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;