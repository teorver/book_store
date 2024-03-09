import { createSlice } from "@reduxjs/toolkit";
import { Book_isbn } from '../../store.types';
import initialBook, { SingleBook } from './book.types';

const isbnSlice = createSlice({
    name: Book_isbn.CURRENT_ISBN,
    initialState: initialBook,
    reducers: {
        setIsbn: (state: SingleBook, action: { payload: SingleBook }) => {
            state.isbn13 = action.payload.isbn13;
        },
        updateIsbn: (state: SingleBook, action: { payload: string }) => {
            state.isbn13 = action.payload
        },
    }
});

export const { setIsbn, updateIsbn } = isbnSlice.actions;

export default isbnSlice.reducer;
