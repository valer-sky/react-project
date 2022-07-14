import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import beer from './slices/BeersSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    beer,
  },
})