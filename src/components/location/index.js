import React from 'react'
import Sectiontitle from '../section-title'
import weddingCeremony from '../../images/events/harbor-island-park.png'
import receptionParty from '../../images/events/harbor-loft-2.png'

import './style.css'

const Location = () => {
    return (


        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'When & Where'} date={'Date: July 23, 2022'} />
                <div className="service-area-menu">
                    <h3 className='location-reminder'>***Reminder to arrive on time (with enough time to park your vehicle) ideally before 2:50pm because the venue has a strict timetable and we will be starting the ceremony right at 3:00pm</h3>
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={weddingCeremony} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Wedding Ceremony</h3>
                                    <span>Time: 3:00 PM</span>
                                    <span>Harbor Island Park</span>
                                    <span>1875 Harbor Island Drive San Diego, CA 92101</span>
                                    <span>Location: Harbor Island Park</span>
                                    <p>Complimentary Parking Validation Available onsite at Harbor View Loft across the street from Harbor Island Park (A credit card is required to enter the parking lot).
                                    </p>
                                    
                                    <a href="https://www.google.com/maps/place/Harbor+Island+Park/@32.7251045,-117.2083883,17z/data=!3m1!4b1!4m5!3m4!1s0x80deab6b395eadb5:0xb92347b65f430353!8m2!3d32.7251045!4d-117.2061996">See Location</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={receptionParty} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Reception Party</h3>
                                <span>Time: End of Ceremony - 8:00pm</span>
                                <span>Harbor View Loft (2nd Floor)</span>
                                <span>1875 Harbor Island Drive San Diego, CA 92101</span>
                                <span>(Located across the street from the ceremony)</span>
                                <a href='https://www.google.com/maps/place/Harbor+View+Loft/@32.7255601,-117.2077256,17z/data=!3m1!4b1!4m5!3m4!1s0x80deabdd0530004d:0x4b793a8b15b4319b!8m2!3d32.7255601!4d-117.2055316'>See Location</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;