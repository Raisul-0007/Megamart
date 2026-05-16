import React from 'react'
import Container from './Container'
import One from "../assets/One.png"
import Two from "../assets/Two.png"
import Three from "../assets/Three.png"

const Ads = () => {
  return (
    <div className='py-20'>
      <Container >
        <div className="">
          <h2 className='pb-15 text-5xl font-semibold '>Offer Product</h2>
        </div>
        <div className="flex justify-between">
        <div className="w-1/3"><img className='w-full h-[200px] px-1' src={One} alt="one" /></div>
        <div className="w-1/3"><img className='w-full h-[200px] px-1' src={Three} alt="Three" /></div>
        <div className="w-1/3"><img className='w-full h-[200px] px-1' src={Two} alt="Two" /></div>
        </div>
      </Container>
    </div>
  )
}

export default Ads
