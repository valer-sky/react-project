import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/filterSlices';

export const store = configureStore({
  reducer: {counter:counterReducer},
})