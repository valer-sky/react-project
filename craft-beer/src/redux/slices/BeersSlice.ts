import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchBeers = createAsyncThunk('beer/fetchBeerStatus',
    async (params: SearchBeerParams) => {
        const {
            category,
            order,
            sortBy,
            search,
            currentPage,
        } = params;
        const { data } = await axios
        .get<Beer>(`https://62becc69be8ba3a10d5be2ad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,)
          
      return data;
    }
  )

type Beer = {
    id: string;
    title: string;
    price: number;
    image: string; 
    types: number[];
    size: number[];
    raiting: number;
};
  
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'succses',
    ERROR = 'error'
};

interface BeerSliceState {
    items: Beer[];
    status: Status;  // loading, succses, error
};

const initialState: BeerSliceState = {
    items: [],
    status: Status.LOADING, // loading, succses, error
};

export type SearchBeerParams = {
    category: string;
    order: string;
    sortBy: string;
    search: string;
    currentPage: string;
}

const beersSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Beer[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBeers.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });
         //any?
        builder.addCase(fetchBeers.fulfilled, (state, action: any) => {
            state.items = action.payload
            state.status = Status.SUCCESS;
        });
    
        builder.addCase(fetchBeers.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
      },
   
});

export const { setItems } = beersSlice.actions;

export default beersSlice.reducer;