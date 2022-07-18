import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import beer from './slices/BeersSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    beer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;