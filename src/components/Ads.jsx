import React from 'react'
import Container from './Container'
import One from "../assets/One.png"
import Two from "../assets/Two.png"
import Three from "../assets/Three.png"

const Ads = () => {
  return (
    <div className='py-30'>
      <Container className="flex justify-between">
        <div className="w-1/3"><img className='w-full h-50 px-1' src={One} alt="one" /></div>
        <div className="w-1/3"><img className='w-full h-50 px-1' src={Three} alt="Three" /></div>
        <div className="w-1/3"><img className='w-full h-50 px-1' src={Two} alt="Two" /></div>
      </Container>
    </div>
  )
}

export default Ads
