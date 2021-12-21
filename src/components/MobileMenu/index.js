import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="logo2">
                        <h2><Link to='/home'>Cory & Ashley</Link></h2>
                    </div>
                    <ul className="responsivemenu">
                        <li><AnchorLink href='#home'>Home</AnchorLink></li>
                        <li><AnchorLink href='#event'>Location</AnchorLink></li>
                        <li><AnchorLink href='#needtoknow'>Need To Know</AnchorLink></li>
                        <li><AnchorLink href='#rsvp'>RSVP</AnchorLink></li>
                        <li><AnchorLink href='#story'>Story</AnchorLink></li>
                        <li><AnchorLink href='#registry'>Registry</AnchorLink></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
