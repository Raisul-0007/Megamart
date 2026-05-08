import React from 'react'
import { FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa'
import Container from './Container'

const Navber = () => {
  return (
    <div className="border-b border-[#F5F5F5]">
    <Container className='py-5 flex justify-between'>
      <div className="">
        <h3 className='text-3xl font-bold text-[#1798d0]'>MegaMart</h3>
      </div>
        <div className="relative">
          <input className='bg-[#f3f9fb]  rounded-2xl py-3 pl-5 pr-80' type="text" placeholder='Search'/>
          <div className="absolute text-[#1798d0] top-4 right-5">
            <FaSearch />
          </div>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <div className="text-[#1798d0]"></div>
              <div className="text-[#1798d0]">
                <FaRegUser />
              </div>
              Sign In/ Sign Up
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#1798d0]">
                <FaShoppingCart />
              </div>
               Cart
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Navber
