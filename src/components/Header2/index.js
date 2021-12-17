import React from 'react';
import { Link } from 'react-router-dom'
import 'react-sticky-header/styles.css';
import MobileMenu2 from '../../components/MobileMenu2'

const Header2 = () => {

    return (
        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><Link to='/home'>Harry<span><i className="fa fa-heart" aria-hidden="true"></i></span>Nancy</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className=" mobail-menu d-flex">
                                    <li><Link to='/home'>Home</Link>
                                        <ul className="submenu">
                                            <li><Link to='/'>Home Style 1</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/home'>Story</Link></li>
                                    <li><Link to='/home'>Events</Link></li>
                                    <li><Link to='/home'>Rsvp</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2;