import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'
import butteryFlyIris from '../../images/hero/butterflyiris.png'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><Link to='/home'>Cory<span><img className='header-logo' alt="butterfly-iris" src={butteryFlyIris}/></span>Ashley</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>Home </AnchorLink></li>
                                    <li><AnchorLink href='#covid'>COVID </AnchorLink></li>
                                    <li><AnchorLink href='#needtoknow'>Need to Know</AnchorLink></li>
                                    <li><AnchorLink href='#registry'>Registry</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Location</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                          
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
