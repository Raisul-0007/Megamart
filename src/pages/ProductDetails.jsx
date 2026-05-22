import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import { useDispatch } from 'react-redux'
import { addToCart} from '../components/slice/cartSlice'
const ProductDetails = () => {
    let {id} = useParams()
    let [product, setProduct] = useState([])

    let singleProducts = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
        singleProducts()
    },[])

    let dispatch = useDispatch()

    let handleCart = (item)=>{
        dispatch(addToCart({...item, qun:1}))
    }
  return (
    <div>
    <Container className="flex">
        <div className="w-1/2">
            <img className='bg-[#F5F5F5]  rounded-3xl w-full border-[#F5F5F5]' src={product.thumbnail} alt={product.title} />
        </div>
        <div className="w-1/2 px-10 py-10">
            <h2 className='text-5xl font-medium'>{product.title}</h2>
            <div className="flex items-center gap-5 py-3">
                <p className='text-2xl font-medium'>{product.discountPercentage
    ? `$${(
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)}`
    : ''}</p>
                <p className='text-2xl text-[#6C6C6C] line-through'>${product.price}</p>
            </div>
            <div className="">
                {((product.price / 100) * product.discountPercentage).toFixed(0) != 0 ?
            (<h6 className='text-[#2e9f47] font-semibold'>
            Save ${((product.price / 100) * product.discountPercentage).toFixed(0)}
            </h6>)
            :
            (<div className="">
                <h6 className='text-[#2e9f47] font-semibold'>No Discount</h6>
            </div>)
            }
            </div>
            <p className='text-xl py-5'>Brand: <span className='text-lg'>{product.brand}</span></p>
            <p>{product.description}</p>

            <div className="py-10">
                <button onClick={()=> handleCart(product)} className="bg-[#1798d0] text-white py-3 cursor-pointer w-full rounded-lg hover:bg-[#036b97]">Add to Cart</button>
            </div>
        </div>
    </Container>   
    </div>
  )
}

export default ProductDetails