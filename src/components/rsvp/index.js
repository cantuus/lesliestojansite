import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    state = {
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (rsvp === '') {
            error.rsvp = "Select your number of rsvp";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.rsvp === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                rsvp: '',
                events: '',
                notes: '',
                error: {}
            })
        }

        console.log(this.state);
        console.log(this.state.error.notes);
    }

    render() {

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;
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
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe37KfXsn8rBGdtDWN1g-rO5LkG6xZYYRkAIZu0YnllSbu91w/viewform?embedded=true" width="100%" height="1285" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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