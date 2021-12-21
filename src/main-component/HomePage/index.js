import React from  'react';

// components
import SimpleSlider from '../../components/hero';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Location from '../../components/location';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import NeedToKnow from '../../components/needtoknow/needtoknow';


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Welcome/>
           <Location/>
           <NeedToKnow/>
           <Rsvp/>
           <Story/>
           <Gift/>
       </div>
    )
}

export default Homepage;