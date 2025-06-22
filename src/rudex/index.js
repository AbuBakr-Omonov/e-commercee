import { configureStore } from '@reduxjs/toolkit'
import wishlist from "./features/wishlistSlice"
export const store = configureStore({
  reducer: {
    wishlist
  },
})