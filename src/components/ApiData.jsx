import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

let Data = createContext()
const ApiData = ({children}) => {
    let [info, setInfo] = useState([])

    let getData = async ()=>{
        try{
            const response = await fetch("https://dummyjson.com/products?&limit=0")
            const data = await response.json()
            setInfo(data.products)
        }catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
      <Data.Provider value={info}>{children}</Data.Provider>
    </>
  )
}

export {ApiData, Data}
