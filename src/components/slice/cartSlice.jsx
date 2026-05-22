import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if(index != -1){
        state.cartItems[index].qun++
      }else{
        state.cartItems = [...state.cartItems, action.payload]
      }
    },
    removeCart: (state, action) => {
        let filterCart = state.cartItems.filter((item)=> item.id != action.payload.id)
        state.cartItems = filterCart
    },
    increment: (state, action) => {
        let index = state.cartItems.findIndex((item) => item.id === action.payload.id)
        if(index !== -1){
            state.cartItems[index].qun++
        }
    },
    decrement: (state, action) => {
        let index = state.cartItems.findIndex((item) => item.id === action.payload.id)
        if(index !== -1 && state.cartItems[index].qun > 1){
            state.cartItems[index].qun--
        }
    },
  },
})

export const { addToCart, removeCart, increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer