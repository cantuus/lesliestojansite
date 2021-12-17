import React from 'react';
import './style.css'

const Sectiontitle = (props) => {
    return (
        <div className="section-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{props.section}</h2>
                    </div>
                    <div className="col-12">
                        <h3>{props.date}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectiontitle;