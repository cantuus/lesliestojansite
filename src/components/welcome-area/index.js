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
                            <p>Please read the "Need to Know" section before you RSVP and check back for updates as the wedding date approaches. Thank you!</p>
                            <div className="btn"><AnchorLink href="#event">Location</AnchorLink></div>
                            <div className="btn"><AnchorLink href="#needtoknow">Need to Know</AnchorLink></div>
                            <div className="btn"><AnchorLink href="#rsvp">RSVP</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;