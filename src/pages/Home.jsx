import React from 'react'
import Banner from './../components/Banner';
import Best from './../components/Best';
import NewArrivals from './../components/NewArrivals';
import Ads from './../components/Ads';


const Home = () => {
  return (
    <div>
     <Banner/>
     <Best/>
     <Ads/>
     <NewArrivals/>
    </div>
  )
}

export default Home
