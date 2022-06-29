import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'


const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day!</h2>
                            <p>Please review our COVID protocols and check out our wedding registry as the wedding date approaches. Thank you!</p>
                            <div className="btn"><AnchorLink href="#covid">COVID Protocols</AnchorLink></div>
                            <div className="btn"><AnchorLink href="#registry">Registry</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;