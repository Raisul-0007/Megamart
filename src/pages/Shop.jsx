import React, { useContext, useEffect, useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import Container from './../components/Container';
import { Data } from '../components/ApiData';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
const Shop = () => {
    let {info} = useContext(Data)

    let [cateShow, SetCateShow] = useState(true)
    let [brandShow, setBrandShow] = useState(false)
    let [priceShow, setPriceShow] = useState(false)

    let [Category, setCategory] = useState([])
    useEffect(()=>{
        setCategory([...new Set(info.map((item)=>item.category))])
    },[info])

    let [Brand, setBrand] = useState([])
    useEffect(()=>{
        setBrand([...new Set(info.map((item)=>item.brand))])
    },[info])



    let [filterCategory, setFilterCategory] = useState(info)

    let handleCategory = (citem)=>{
        let filterItem = info.filter((item)=> item.category === citem)
        setFilterCategory(filterItem)
    } 
    let handleBrand = (bitem)=>{
        let filterItem = info.filter((item)=> item.brand === bitem)
        setFilterCategory(filterItem)
    }

    let [low, setLow] = useState()
    let [high, setHigh] = useState()
    let handlePrice = (value)=>{
        setLow(value.low)
        setHigh(value.high)
        let priceFilter = info.filter((item)=> item.price >= value.low && item.price <= value.high)
        setFilterCategory(priceFilter)
    }
    let handleAll = ()=>{
        setFilterCategory(info)
    }

   useEffect(()=>{
    setFilterCategory(info)
}, [info])
    
  return (
    <div>
      <Container>
        <div className=" pt-5 pb-20">
            <h2 className='text-5xl font-semibold'>Shop</h2>
        </div>
        <div className="flex">
        <div className="w-1/4">
        <div className="">
            <div onClick={(()=>SetCateShow(!cateShow))} className="py-3 px-2 border-b border-[#7676762d] flex items-center justify-between">
            <h3 className='text-3xl'>Shop By Category</h3>
            <h6 className='text-2xl'>{cateShow ? <MdArrowDropUp/> : <MdArrowDropDown/>}</h6>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${cateShow ? "" : "max-h-0"}`}>
            <ul>
                <li onClick={handleAll} className='py-2 px-2 border-b border-[#7676762d] uppercase'><p>All Products </p></li>
                {Category.map((item)=>(
                <li onClick={()=>{handleCategory(item)}} key={item} className='py-2 px-2 border-b border-[#7676762d] uppercase'><p>{item}</p></li>
                ))}
            </ul>
        </div>
        <div className="">
            <div onClick={(()=>setBrandShow(!brandShow))} className="py-3 px-2 border-b border-[#7676762d] flex items-center justify-between">
            <h3 className='text-3xl'>Shop By Brand</h3>
            <h6 className='text-2xl'>{brandShow ? <MdArrowDropUp/> : <MdArrowDropDown/>}</h6>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${brandShow ? "" : "max-h-0"}`}>
            <ul>
                <li onClick={handleAll} className='py-2 px-2 border-b border-[#7676762d] uppercase'><p>All Brands </p></li>
                {Brand.map((item)=>(
                <li onClick={()=>{handleBrand(item)}} key={item} className='py-2 px-2 border-b border-[#7676762d] uppercase'><p>{item}</p></li>
                ))}
            </ul>
        </div>
        </div>
        <div className=" ">
            <div onClick={(()=>setPriceShow(!priceShow))} className="py-3 px-2 border-b border-[#7676762d] flex items-center justify-between">
              <h3 className='text-3xl'>Shop By Price</h3>
            <h6 className='text-2xl'>{priceShow ? <MdArrowDropUp/> : <MdArrowDropDown/>}</h6>  
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${priceShow ? "" : "max-h-0"}`}>
                <ul>
        
                    <li onClick={handleAll} className='py-2 px-2 border-b border-[#7676762d] uppercase'><p>All price</p></li>
                    <li onClick={()=> handlePrice({low:0, high:10})} className='py-2 px-2 border-b border-[#7676762d] '><p>$0-$10</p></li>
                    <li onClick={()=> handlePrice({low:11, high:30})} className='py-2 px-2 border-b border-[#7676762d] '><p>$11-$30</p></li>
                    <li onClick={()=> handlePrice({low:31, high:50})} className='py-2 px-2 border-b border-[#7676762d] '><p>$31-$50</p></li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        <div className="w-3/4 px-10">
            <div className="">
                <Products filterCategory={filterCategory}/>
            </div>
        </div> 
        </div>
      </Container>
    </div>
  )
}

export default Shop