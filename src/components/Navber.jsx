import React, { useRef, useState } from 'react'
import { FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navber = () => {
  let [show, setShow] = useState(false)
  let navRef = useRef()

  document.addEventListener("click", (e)=>{
    if(navRef.current.contains(e.target) == true){
      setShow(!show)
    }else{
      setShow(false)
    }
  })
  return (
    <div className="border-b border-[#F5F5F5]">
    <Container className='py-5 flex justify-between'>
      <div className="relative w-1/4">
        <div ref={navRef} className="">
        <h3 className='cursor-pointer text-3xl font-bold text-[#1798d0]'>MegaMart</h3>
      </div>
      {show && (
      <div className="absolute top-17 left-0 z-999 w-40 bg-[#1798d0]">
        <ul>
          <li className=' border-b border-[#ffffff33] hover:bg-[#036b979f] cursor-pointer duration-200'><Link className='block w-full py-1 text-white' to="/">Home</Link></li>
          <li className=' border-b border-[#ffffff33] hover:bg-[#036b979f] cursor-pointer duration-200'><Link className='block w-full py-1 text-white' to="/shop">Shop</Link></li>
          <li className='py-1 border-b border-[#ffffff33] hover:bg-[#036b979f] cursor-pointer duration-200'><a className='text-white' href="#">About</a></li>
          <li className='py-1 hover:bg-[#036b979f] cursor-pointer ease-in-out duration-200'><a className='text-white'  href="#">Contact</a></li>
        </ul>
      </div>
      )}
      </div>
        <div className="relative w-2/4">
          <input className='bg-[#f3f9fb]  rounded-2xl py-3 pl-5 w-[80%]' type="text" placeholder='Search'/>
          <div className="absolute text-[#1798d0] top-4 right-[23%]">
            <FaSearch />
          </div>
          </div>
          <div className="flex gap-10 w-1/4">
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
