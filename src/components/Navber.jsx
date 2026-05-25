import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Data } from './ApiData';

const Navber = () => {
  let {info} = useContext(Data)
  let [show, setShow] = useState(false)
  let navRef = useRef()
  let searchRef = useRef()
  let navigate = useNavigate()

  document.addEventListener("click", (e)=>{
    if(navRef.current.contains(e.target) == true){
      setShow(!show)
    }else{
      setShow(false)
    }
  })

  let addToCart = useSelector((state) => state.cart.cartItems)

  let [filter, setFilter] = useState([])
  let [search, setSearch] = useState(false)
  let handleSearch = (e) => {
    if(e.target.value){
      setSearch(true)
      let productfilter = info.filter((item) =>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilter(productfilter)
    }else{
      setSearch(false)
    }
  }
  let handleProduct= (id)=>{
    navigate(`/shop/${id}`)
     window.location.reload()
  }
  
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearch(false)
    }
  }

  document.addEventListener("click", handleClickOutside)

  return () => {
    document.removeEventListener("click", handleClickOutside)
  }
}, [])

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
        <div ref={searchRef} className="relative w-2/4">
          <input onChange={handleSearch} className='bg-[#f3f9fb]  rounded-2xl py-3 pl-5 w-130' type="text" placeholder='Search'/>
          <div className="absolute text-[#1798d0] top-4 right-[23%]">
            <FaSearch />
          </div> 
          {search && (
            <div className="absolute top-15 left-0 max-h-80 w-128 bg-[#ffffff] overflow-y-scroll shadow-lg z-[999] rounded-md">
              {filter.map((item) =>(
                <Link className="block w-full  border-b border-[#aaa3a398] hover:bg-[#036b979f] cursor-pointer" onClick={()=> handleProduct(item.id)} key={item.id} to={`/shop/${item.id}`}>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-1/4">
                      <img className="h-20" src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="w-3/4">
                      {item.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          </div>
          <div className="flex gap-10 w-1/4">
            <div className="flex items-center gap-3">
              <div className="text-[#1798d0]"></div>
              <div className="text-[#1798d0]">
                <FaRegUser />
              </div>
              Sign In/ Sign Up
            </div>
            <Link to="/cart" className="flex items-center gap-3 relative">
              <div className="text-[#1798d0] ">
                <FaShoppingCart />
              </div>
               Cart
               {addToCart.length > 0 && (
                <div className="absolute top-1 -right-5 text-[12px] bg-[#1798d0] h-5 w-5 flex items-center justify-center rounded-full">
                  {addToCart.length}
                </div>
               )}
            </Link>
          </div>
      </Container>
    </div>
  )
}

export default Navber