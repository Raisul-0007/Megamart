import React, {  useContext, useEffect, useState } from 'react'
import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6'
import Pagination from './Pagination'
import { Data } from './ApiData'
import { Link } from 'react-router-dom'

const Products = ({filterCategory}) => {


    let [active,setActive] =useState("")
    let handleActive = ()=>{
    setActive("active")
    } 

        let handlePageNumber = (e)=>{
        setPerPage(e.target.value)
        }

    let [perPage, setPerPage] = useState(9)
    let [currentPage, setCurrentPage] = useState(1)
    let everyPage = perPage * currentPage
    let firstPage = everyPage - perPage 
    let allPage = filterCategory.slice(firstPage, everyPage)
    let pageNumber = []
    for(let i=1; i<= Math.ceil(filterCategory.length / perPage); i++){
        pageNumber.push(i)
    }
    let prev = ()=>{
        if(currentPage > 1){
            setCurrentPage((index)=> index - 1)
        }
    }
    let paginate = (index)=>{
        setCurrentPage(index + 1)
    }
    let next = ()=>{
        if(currentPage < pageNumber.length){
            setCurrentPage((index)=> index + 1)
        }
    }

    useEffect(()=>{
  setCurrentPage(1)
}, [perPage, filterCategory])


    // let [show, setShow] = useState([])

    // let handleShow = ()=>{
    //     allPage(filterCategory)
    //     setShow(false)
    // }
    // let handleLess = ()=>{
    //     let filterCate = filterCategory.slice(0,9)
    //     allPage(filterCate)
    //     setShow(true)
    // }

  return (
    <div>
        <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div onClick={()=>setActive("")}  className={`${active == "active" ?"p-1 hover:bg-[#505050] hover:text-[#FFFFFF] border border-[#262626] cursor-pointer" : "p-1 bg-[#262626] text-[#FFFFFF] cursor-pointer" }`}>
                <FaTableCellsLarge/>
            </div>
           <div onClick={handleActive} className={`${active == "active" ? "p-1 bg-[#262626] text-[#FFFFFF] cursor-pointer" : "p-1 hover:bg-[#505050] hover:text-[#FFFFFF] border border-[#262626] cursor-pointer" }`}>
             <FaListUl/>
           </div>
              </div>

        <div className="flex px-4 gap-3">
          <p className='font-dm text-[16px] text-[#767676]'>Show:</p>
          <select onChange={handlePageNumber} className='cursor-pointer font-dm text-[14px] text-[#767676] border border-[#737373] py-0.5 pr-12.5' name="" id="">
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
        </div>
        </div>
        {allPage.length > 0 ? (
        <div className="flex flex-wrap ">
            {allPage.map((item)=>(
                <div key={item.id}  className='w-1/3 py-5'>
          <Link to={`/shop/${item.id}`} className="rounded-3xl  bg-white mx-3">
            <div className="bg-[#F5F5F5] w-full rounded-t-3xl border-[#F5F5F5] relative">
            <img className=' w-full h-50' src={item.thumbnail} alt={item.id} />
            <div className="absolute right-0 top-0"><p className='px-3 py-2.5   bg-[#1798d0] rounded-tr-3xl rounded-bl-2xl rounded-br-none'>{Number(item.discountPercentage.toFixed(0)) > 0 && (<span>{item.discountPercentage.toFixed(0)}%</span>)}</p></div>
          </div>
          <div className="px-4 py-2">
            <div className="py-1">
                <h4>{item.title?.slice(0,15)}</h4>
            <div className="py-1 flex gap-2">
                
                <p className=''>{item.discountPercentage
    ? `$${(
        item.price -
        (item.price * item.discountPercentage) / 100
      ).toFixed(2)}`
    : ''}</p>
    <p className='line-through text-[#6C6C6C]'>${item.price}</p>
            </div>
            </div>
            <div className="  border-t border-[#76767627]">
            {((item.price / 100) * item.discountPercentage).toFixed(0) != 0 ?
            (<h6 className='text-[#2e9f47] font-semibold'>
            Save ${((item.price / 100) * item.discountPercentage).toFixed(0)}
            </h6>)
            :
            (<div className="">
                <h6 className='text-[#2e9f47] font-semibold'>No Discount</h6>
            </div>)
            }
            </div>
          </div>
          </Link>
        </div>
            ))}
        </div>
        ) : (
            <div className="">NO</div>
        )}
        <div className="">
            <div className="">
                <Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentPage={currentPage} filterCategory={filterCategory}/>
            </div>
        </div>
        
    </div>
  )
}

export default Products