import React, { Component } from "react";
import './style.css'


class Gift extends Component {
  render() {
    return (
      <div id="registry" className="gift-area">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Gift Registration</h2>
              <p>We have chosen to use our gift registry to fund our honeymoon experience. You are welcome to select any item to make a contribution. We appreciate your support and help in making our honeymoon a magical experience.</p>
            </div>
          </div>
          <div className="col-lg" style={{ display: "flex", justifyContent: "center"}}>
            <div className="btn"><a href="https://www.blueprintregistry.com/registry/cory-stojan-wedding-registry-7-23-2022">Registry</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;