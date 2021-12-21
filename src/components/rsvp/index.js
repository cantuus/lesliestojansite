import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    render() {

        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="col-12">
                                    <div className="section-title section-title4 text-center">
                                        <h2>Please RSVP via your mailed invitation or the Google Form below before January 31st, 2022. </h2>
                                    </div>
                                </div>
                                <div className=''>
                                    <iframe title='rsvp' src="https://docs.google.com/forms/d/e/1FAIpQLSe37KfXsn8rBGdtDWN1g-rO5LkG6xZYYRkAIZu0YnllSbu91w/viewform?embedded=true" width="100%" height="1285" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;