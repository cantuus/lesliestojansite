import React, { Component } from "react";
import courtyard from "../../images/hotel/courtyardlogo.png"
import homewood from "../../images/hotel/homewoodsuites2.png"
import './style.css'

class NeedToKnow extends Component {
    render() {
        return (
            <div id="needtoknow" className="gift-area">
                <div className="container">
                    <div className="col-12 need-to-know-area">
                        <div className="section-title text-center">
                            <h2>Need to Know</h2>
                            <div className="col-lg">
                                <div className="ceromony-content">
                                    <h3>Event Details</h3>
                                    <p>This is a DRY wedding. We are keeping our event family friendly and will not be serving alcohol.</p>
                                    <p>The ceremony will be in the park on the grass. Please consider wearing appropriate shoes.</p>
                                    <p>Complimentary parking validation available onsite at Harbor View Loft across the street from Harbor Island Park.</p>
                                    <p>The venue has a strict time frame for use. The reception needs to end at 8:00pm so that vendors can have their full clean-up time of 1 hour. They will need to be out by 9:00pm.</p>
                                </div>
                                <div className="ceromony-content">
                                    <h3>Hotel Blocks</h3>
                                    <p>Please book your hotel early if you are visiting San Diego. The wedding will occur during the same weekend as Comic-Con and booking will potentially be difficult if you wait until the last minute.</p>
                                    <p>We have secured two local hotel blocks at this time for guests to reserve and pay for their stay. Please click on the logos to learn more about options and pricing before you book. </p>
                                    <div className="hotel-area">
                                        <div className="hotel-item hotel-item-1">
                                            <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1639609135744&key=GRP&app=resvlink"><img src={courtyard}></img></a>
                                        </div>
                                        <div className="hotel-item">
                                            <img src={homewood}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="ceromony-content">
                                    <h3>Reception</h3>
                                    <p>Our reception will be across the street from the ceremony (indoors). If the street is very busy, please be mindful that there is no official crosswalk as you make your way to the reception.</p>
                                </div>
                                <div className="ceromony-content">
                                    <h3>If you are unable to attend in San Diego..</h3>
                                    <p>There will be a reception in Hampshire, Illinois in August after the honeymoon. Please stay tuned for more details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NeedToKnow;