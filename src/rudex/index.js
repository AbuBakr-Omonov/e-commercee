import { configureStore } from '@reduxjs/toolkit'
import wishlist from "./features/wishlistSlice"
import cart from "./features/cart"

export const store = configureStore({
  reducer: {
    wishlist,
    cart,
  },
})