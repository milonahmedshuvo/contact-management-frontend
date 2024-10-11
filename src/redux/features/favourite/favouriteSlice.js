import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteItems: [],
}




export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavourite: (state, action)  => {
      state.favouriteItems.push(action.payload)
     
    },
  },
})




export const { addFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer