import React from 'react'
import { CiDeliveryTruck, CiLocationOn, CiSettings } from "react-icons/ci";
const Header = () => {
  return (
    <div className='py-2  flex justify-between bg-[#F5F5F5]'>
      <div className="">
        <p className='text-[#dbdbdb]'>Welcome to Megamart</p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
            <div className="text-[#1798d0]"><CiLocationOn /></div>
            <p className='text-[#dbdbdb]'>Deliver to 6626256</p>
        </div>
        <div className="flex items-center gap-1">
            <div className="text-[#1798d0]"><CiDeliveryTruck /></div>
            <p className='text-[#dbdbdb]'>Track your order</p>
        </div>
        <div className="flex items-center gap-1">
            <div className="text-[#1798d0]"><CiSettings /></div>
            <p className='text-[#dbdbdb]'>All Offers</p>
        </div>
      </div>
    </div>
  )
}

export default Header
