import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
}

export const counterSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
     toggleWishlist:(state, action) => {
       const index = state.value.findIndex(item => item.id === action.payload.id)
      if(index < 0){
        state.value.push(action.payload)
      }else{
        state.value = state.value.filter((item) => item.id !== action.payload.id)
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value)) 
     }
  },
})

export const { toggleWishlist} = counterSlice.actions

export default counterSlice.reducer