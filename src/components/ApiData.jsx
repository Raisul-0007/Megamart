import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

let Data = createContext()
const ApiData = ({children}) => {
    let [info, setInfo] = useState([])
    let [loading, setLoading] = useState(true);

    let getData = async ()=>{
        try{
            const response = await fetch("https://dummyjson.com/products?&limit=0")
            const data = await response.json()
            setInfo(data.products)
            setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
      <Data.Provider value={{info, loading}}>{children}</Data.Provider>
    </>
  )
}

export {ApiData, Data}
