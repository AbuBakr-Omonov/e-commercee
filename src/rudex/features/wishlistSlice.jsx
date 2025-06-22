import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {

  },
})

export const {  } = counterSlice.actions

export default counterSlice.reducer