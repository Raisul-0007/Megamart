import React from 'react'

const Pagination = ({pageNumber,paginate,next,prev,currentPage,filterCategory}) => {
  
    return (
    <nav aria-label="Page navigation example" className={`${filterCategory.length === 0 ? "hidden" : ""}`}>
        <ul className="flex text-sm justify-center py-10">
            <li >
                <button onClick={prev} className="font-dm lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#1799d0bb] hover:text-white cursor-pointer">Previous</button>
            </li> 
           {pageNumber.map((item, i)=>(
            <li key={i} onClick={()=>paginate(i)}>
                <button className={`${currentPage === i + 1 ? "font-dm lg:text-[14px] text-[10px] px-3 py-2 border hover:bg-[#1799d0bb] border-gray-300 bg-[#1798d0] text-white cursor-pointer" : "font-dm lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#1798d0] hover:text-white cursor-pointer"}`}>{item}</button>
                </li>
           ))}
            <li >
                <button onClick={next} className=" font-dm lg:text-[14px] text-[10px] px-3 py-2  text-gray-500 bg-white border  border-gray-300 hover:bg-[#1799d0bb] hover:text-white cursor-pointer">Next</button>
            </li>
        </ul>
</nav>

  )
}

export default Pagination