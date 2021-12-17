import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div id="home" className="item1">
          <div className="container">
            <div className="slide-content">
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
        <div className="item4">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
        <div className="item5">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
        <div className="item6">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
        <div className="item7">
          <div className="container">
            <div className="container">
              <div className="slide-content">
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;