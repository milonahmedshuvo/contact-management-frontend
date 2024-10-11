import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from './api/contactApi'
import favouriteReducer from './features/favourite/favouriteSlice'


export const store = configureStore({

  reducer: {
    favourite: favouriteReducer,
    
    [contactApi.reducerPath] : contactApi.reducer
  },

 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})