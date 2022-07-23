import React from  'react';

// components
import SimpleSlider from '../../components/hero';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Location from '../../components/location';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import NeedToKnow from '../../components/needtoknow/needtoknow';
import Covid from '../../components/covid'
import Program from '../../components/program/program'
import Menu from "../../components/menu/menu"


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Welcome/>
           <Covid/>
           <Program/>
           <Menu/>
           <NeedToKnow/>
           <Gift/>
           <Location/>
           <Story/>
       </div>
    )
}

export default Homepage;