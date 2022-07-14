import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBeers= createAsyncThunk('beer/fetchBeerStatus',
    async (params) => {
        const {
            category,
            order,
            sortBy,
            search,
            currentPage,
        } = params;
        const { data } = await axios
        .get(`https://62becc69be8ba3a10d5be2ad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,)
          
      return data
    }
  )
  

const initialState = {
    items: [],
    status: 'loading',  // loading, succses, error
};

const beersSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchBeers.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchBeers.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'succses';
        },
        
        [fetchBeers.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        }
    }       
});

export const { setItems } = beersSlice.actions;

export default beersSlice.reducer;