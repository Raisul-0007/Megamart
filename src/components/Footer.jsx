import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import app from '../assets/app.png'
import play from '../assets/google.png'
const Footer = () => {
  return (
    <div className="bg-[#1798d0] text-white py-5">
      <Container className="flex justify-between">
      <div className="w-1/3">
        <Link to="/" className='cursor-pointer text-3xl font-bold text-white'>MegaMart</Link>
        <div className="flex gap-5 pt-20">
          <img src={app} alt="App Store" />
          <img src={play} alt="Google Play" />
        </div>
      </div>
      <div className="w-1/3 py-10">
        <ul>
          <li className='py-1 cursor-pointer duration-200'><Link className='block w-full py-1 text-white' to="/">Home</Link></li>
          <li className='py-1 cursor-pointer duration-200'><Link className='block w-full py-1 text-white' to="/shop">Shop</Link></li>
          <li className='py-1 cursor-pointer duration-200'><a className='text-white' href="#">About</a></li>
          <li className='py-1 cursor-pointer ease-in-out duration-200'><a className='text-white'  href="#">Contact</a></li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end items-center">
      <h2 className='text-xl'>Cash on delivery</h2>
      </div>
      </Container>
    </div>
  )
}

export default Footer
