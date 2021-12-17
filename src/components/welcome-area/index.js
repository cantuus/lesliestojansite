import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'


const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day!</h2>
                            <p>Please read our updates for more information before you RSVP and important information in preparation for the day</p>
                            <div className="btn"><AnchorLink href="#rsvp">RSVP</AnchorLink></div>
                            <div className="btn"><AnchorLink href="#event">Location</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;