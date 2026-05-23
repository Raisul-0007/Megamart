import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment, removeCart } from '../components/slice/cartSlice'
import Container from '../components/Container'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
const Cart = () => {
  let dispatch = useDispatch()
  let cartData = useSelector((state) => state.cart.cartItems)

  let handleRemove = (item) => {
    dispatch(removeCart(item))
  }
  let handleIncrement = (item) => {
    dispatch(increment(item))
  }
  let handleDecrement = (item) => {
    dispatch(decrement(item))
  }
  let totalPrice = cartData?.reduce((total, item) => {
  return total + (item.qun * item.price)
}, 0)
  return (
    <div>
      <Container className=''>
        <div className="">
          <h2 className="text-5xl py-20">Your Cart</h2>
        </div>
        <div className="">
          {cartData.length > 0 &&
          (<div className="flex bg-[#1798d0] text-white py-6 pl-2">
                    <div className="w-1/4 flex justify-center">Product</div>
                    <div className="w-1/4 flex justify-center">Price</div>
                    <div className="w-1/4 flex justify-center">Quantity</div>
                    <div className="w-1/4 flex justify-center">Total</div>
            </div>)
}
        </div>
        <div className="">
          {cartData.length > 0 ?
          (cartData.map((item) => (
             <div className="">
                    <div className="flex items-center pl-2 border border-solid border-[#F0F0F0] py-[10px]">
                    <div className="w-1/4 flex items-center">
                    <div onClick={()=>handleRemove(item)} className="border p-0.5 border-[#F0F0F0] cursor-pointer">
                        <RxCross2 />
                    </div>
                    <div className="h-15 w-15">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="pr-4">
                        {item.title}
                    </div>
                    </div>
                    <div className="w-1/4 flex justify-center">${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</div>
                    <div className="w-1/4 flex justify-center">
                    <div className=" gap-3 py-1 border border-[#F0F0F0] flex">
                    <button onClick={()=>handleDecrement(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0]'><FiMinus/></button>
                    <p className=' text-[14px]'>{item.qun}</p>
                    <button onClick={()=>handleIncrement(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0]'><FiPlus/></button>
                    </div>
                    </div>
                    <div className="w-1/4 flex justify-center">
                    <h3 className=' text-[20pxpx]'>{((item.price - (item.price * item.discountPercentage / 100))* item.qun).toFixed(2)}</h3>
                    </div>
                </div>
                </div>
            ))):
            <h2 className="text-center  text-9 py-20">Your Cart Is Empty</h2>
            }
        </div>
        <div className="">
          {cartData.length > 0 && (
            <div className="relative">
                <div className='flex items-center border w-70 border-[#1798d0] absolute right-10 top-0 rounded-2xl my-10'>
                  <h4 className='text-2xl w-1/2 bg-[#1798d0] text-white py-3.5 text-center rounded-l-2xl'>Total Price:</h4>
                  <h6 className='text-[22px] w-1/2 text-center text-[#1798d0]'>${totalPrice.toFixed(2)}</h6>
                  </div>
              </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Cart