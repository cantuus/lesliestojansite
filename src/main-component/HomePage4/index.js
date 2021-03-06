import React from  'react';

// components
import Couple from '../../components/couple';
import BackgroundVideo from '../../components/hero4';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Location from '../../components/location';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage4 = () => {
    return(
       <div>
           <Navbar/>
           <BackgroundVideo/>
           <Saveday/>
           <Couple/>
           <Welcome/>
           <Story/>
           <Location/>
           <Gift/>
       </div>
    )
}

export default Homepage4;