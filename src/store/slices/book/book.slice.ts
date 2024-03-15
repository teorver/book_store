import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setSearchResult } from '../../actions';

interface SearchState {
    value: string;
    books: any[];
}

const initialState: SearchState = {
    value: '',
    books: [],
};

 const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(setSearchResult, (state, action: PayloadAction<{ value: string; books: any[] }>) => {
            state.value = action.payload.value;
            state.books = action.payload.books;
        });
    },
});

export default searchSlice.reducer;
