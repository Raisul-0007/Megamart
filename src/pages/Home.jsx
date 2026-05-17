import React from 'react'
import Ads from './components/Ads'
import Banner from './components/Banner'
import Best from './components/Best'
import Header from './components/Header'
import Navber from './components/Navber'
import NewArrivals from './components/NewArrivals'


const Home = () => {
  return (
    <div>
     <Header/>
     <Navber/>
     <Banner/>
     <Best/>
     <Ads/>
     <NewArrivals/>
    </div>
  )
}

export default Home
